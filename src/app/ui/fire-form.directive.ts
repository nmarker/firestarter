import { Directive, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { tap, map, take, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { isArray } from 'util';

@Directive({
  selector: '[fireForm]'
})
export class FireFormDirective implements OnInit, OnDestroy {

  // Inputs
  @Input() path: string;
  @Input() formGroup: FormGroup;

  // Internal state
  private _state: 'loading' | 'synced' | 'modified' | 'error';

  // Outputs
  @Output() stateChange = new EventEmitter<string>();
  @Output() formError = new EventEmitter<string>();

  // Firestore Document
  private docRef: AngularFirestoreDocument;

  // Subscriptions
  private formSub: Subscription;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }


  ngOnInit() {
    this.preloadData();
    this.autoSave();
  }

  // Loads initial form data from Firestore
  preloadData() {
    console.log('in preloadData')
    this.state = 'loading';
    this.docRef = this.getDocRef(this.path);
    this.docRef
      .valueChanges()
      .pipe(
        tap(doc => {
          if (doc) {
            console.log('preloadData: ' + JSON.stringify(doc))
            //this.formGroup.patchValue(doc);
            // this.formGroup.patchValue({
            //   email: 'nimeshmarker@path.com',
            //   career: 'Clown',
            //   bio: 'patch bio',
            //   skillArrayForm:  [ 
            //     { 
            //       level: "Advanced", 
            //       skill: "Juggler" 
            //     }, 
            //     { 
            //       level: "Medium", 
            //       skill: "Wizard" 
            //     } 
            //   ] 
            // })
            console.log('###email: ' + doc['email'])
            console.log('@@' + JSON.stringify(doc['skillArrayForm']))
            this.formGroup.setValue({
              email: doc['email'],
              career: doc['career'],
              bio: doc['bio'],
              skillarrayjson: JSON.stringify(doc['skillArrayForm']),
              //skillArrayForm: this.formGroup.setValue(doc['skillArrayForm'])
              //skillArrayForm: JSON.stringify(doc['skillArrayForm'])
              //skillArrayForm: this.getskillForms.setValue([ { level: "Advanced", skill: "Juggler" }])
              //skillArrayForm: this.formGroup.setValue([ { level: "Advanced", skill: "Juggler" }, { level: "Medium", skill: "Juggler" }, { level: "Beginner", skill: "Juggler" } ])
              skillArrayForm: this.testparse(doc['skillArrayForm'])
            });
            console.log(this.formGroup)
            this.formGroup.markAsPristine();
            this.state = 'synced';
          }
        }),
        take(1)
      )
      .subscribe();
  }

  get getskillForms() {
    return this.formGroup.get('skillArrayForm') as FormArray
  }
  
  addArray()
  {
    const phone = this.fb.group({ 
      level: ['level'],
      skill: ['skill']
    })
    const control = <FormArray>this.formGroup.controls['skillArrayForm']
    //control.setValue(phone)
    console.log(control)
  }

  testparse(skillarray: Variable){
    console.log('typeof: ' + typeof skillarray)
    console.log('isarray: ' + isArray(skillarray))
    console.log('in testparse: ' + skillarray)  
    for (let temp in skillarray)
    {
      console.log('temp:' + temp.toString() + ' : ' + skillarray[temp.toString()]['level'] + ' : ' + skillarray[temp.toString()]['skill'])
      
      const phone = this.fb.group({ 
        level: [skillarray[temp.toString()]['level']],
        skill: [skillarray[temp.toString()]['skill']]
      })
  
      //this.getskillForms.push(phone)    
      this.formGroup.setValue(phone)
    }
    

    //return this.formGroup.setValue([ { level: "Advanced", skill: "Juggler" }, { level: "Medium", skill: "Juggler" }, { level: "Beginner", skill: "Juggler" } ])
  }

  // Autosaves form changes
  autoSave() {
    this.formSub = this.formGroup.valueChanges
    .pipe(
      tap(change => {
        this.state = 'modified';
      }),
      debounceTime(2000),
      tap(change => {
        if (this.formGroup.valid && this._state === 'modified') {
          this.setDoc();
        }
      })
    )
    .subscribe();
  }

  // Intercept form submissions to perform the document write
  @HostListener('ngSubmit', ['$event'])
  onSubmit(e) {
    this.setDoc();
  }


  // Determines if path is a collection or document
  getDocRef(path: string): any {
    if (path.split('/').length % 2) {
      return this.afs.doc(`${path}/${this.afs.createId()}`);
    } else {
      return this.afs.doc(path);
    }
  }

  // Writes changes to Firestore
  async setDoc() {
    try {
      await this.docRef.set(this.formGroup.value, { merge: true });
      this.state = 'synced';
    } catch (err) {
      console.log(err)
      this.formError.emit(err.message)
      this.state = 'error';
    }
  }
  
  // Setter for state changes
  set state(val) {
    this._state = val;
    this.stateChange.emit(val);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }

}
