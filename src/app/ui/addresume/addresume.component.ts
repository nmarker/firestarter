import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'addresume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.scss']
})
export class AddresumeComponent implements OnInit {

  myForm: FormGroup;
  myDoc;

  state: string;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      career: ['', Validators.required],
      bio: [''],
      skillarrayjson: [''],
      //skillArrayForm:this.fb.array([])
      skillArrayForm: this.fb.group(
        (
          [this.initSkill()]
        ))
      //skillArrayForm: this.fb.array([ { level: "Advanced", skill: "Juggler" }, { level: "Medium", skill: "Juggler" }, { level: "Beginner", skill: "Juggler" } ])
      //skillArrayForm: this.fb.array([{level: '', skill:''}])
      // skillArrayForm: 
      //  this.fb.array
      //  (
      //    [
      //      (this.initSkill())
      //    ]
      //  )
      
      
    })

    this.myDoc = this.afs.doc('contacts/test').valueChanges();
  }

  initSkill() {
    console.log("in initSkill")
    // initialize our address
    return this.fb.group({
        level: ['', Validators.required],
        skill: ['']
    });
  }


  get getskillForms() {
    return this.myForm.get('skillArrayForm') as FormArray
  }

  changeHandler(e) {
    // console.log(e)
    this.state = e;
  }

  addSkill() {

    const phone = this.fb.group({ 
      level: [],
      skill: []
    })

    this.getskillForms.push(phone);
  }
}
