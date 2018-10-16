import { Component, OnInit, NgZone } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore'
import { tap, first, take } from 'rxjs/operators';

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  fruits: Array<string> = ["apple", "pear", "kiwi", "banana", "grape", "strawberry", "grapefruit", "melon", "mango", "plum"];

  formGroup: FormGroup;
  myDoc;
  state: string;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;

  steps = [
    {label: 'Confirm your name', content: 'Last name, First name.'},
    {label: 'Confirm your contact information', content: '123-456-7890'},
    {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
    {label: 'You are now done', content: 'Finished!'}
  ];

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private _formBuilder: FormBuilder, private afs: AngularFirestore, private zone: NgZone) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email]
        }),
      ])
    });

    this.myDoc = this.afs.doc('location/500').valueChanges();

    this.preloadData()
    
    this.nameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email]
    });
  }

  changeHandler(e) {
    console.log(e)
    //this.state = e;
  }

  preloadData() {

    this.state = 'loading';

    this.afs.doc('location/500').valueChanges().pipe(
      tap(data => {
        //this.myForm.patchValue(data);
        if (data) {
          console.log(JSON.stringify(data));

          this.formGroup.controls['location'].setValue(data['location'])
          
        }
      }),take(1)
    )
    .subscribe()
  }
}
