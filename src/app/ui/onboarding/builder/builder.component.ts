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
  typesOfJobs: string[] = ['Full time employee', 'Contractor', 'Intern'];
  skillList: string[]= ['.NET', 'Python', 'Django'];
  state: string;

  myForm: FormGroup;
  formGroup: FormGroup;
  myDoc;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

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

    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      role: [''],
      location: [''],
      miniresume: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      jobsearchstatus: ['', Validators.required],
      jobtype: [''],
      desiredannualsalary: [''],
      desiredlocation: [''],
      opentoworkremotely: [''],

    });

    this.preloadData()
    
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

          this.firstFormGroup.controls['name'].setValue(data['name'])
          this.firstFormGroup.controls['location'].setValue(data['location'])
          this.firstFormGroup.controls['miniresume'].setValue(data['miniresume'])
          
        }
      }),take(1)
    )
    .subscribe()
  }

  setAddress(addrObj) {
    this.firstFormGroup.controls['location'].setValue(addrObj['formatted_address'])
  }
}
