import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {

  myForm: FormGroup;
  myDoc;

  state: string;

  @Input()
  public itemsFormArray: FormArray;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      career: ['', Validators.required],
      bio: [''],
      jobtitle: [''],
      jobdescription: [''],
      //skill:[''],
      skillArrayForm: this.fb.array([])
    })

    var resumeid = ""
    this.myDoc = this.afs.doc('contacts/test').valueChanges();
  }

  // push new form control when user clicks add button
  addNumber() {
    console.log('in add number')
    const control = <FormArray>this.myForm.controls['numbers'];
    control.push(new FormControl())
  }
  get getskillForms() {
    return this.myForm.get('skillArrayForm') as FormArray
  }

  addSkill() {

    const phone = this.fb.group({ 
      level: [],
      skill: []
    })

    this.getskillForms.push(phone);
  }

  changeHandler(e) {
    // console.log(e)
    this.state = e;
  }

}
