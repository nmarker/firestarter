import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'addresume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.scss']
})
export class AddresumeComponent implements OnInit {

  resumename: string;
  myForm: FormGroup;
  myDoc;

  state: string;

  constructor(private fb: FormBuilder, private afs: AngularFirestore, 
                private activatedRoute: ActivatedRoute,
              private router: Router) { 
    //this.resumename = this.revisedRandId();
  }
  
  revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }

  ngOnInit() {
  
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.resumename = params['jid'];
    });

    if (this.resumename == undefined)
    {
      this.resumename = this.revisedRandId();
      this.navigateToFoo();
    }

    this.myForm = this.fb.group({
      candidatename: [''],
      email: ['', Validators.required],
      career: ['', Validators.required],
      bio: ['']
      //skillarrayjson: [''],
      //skillArrayForm:this.fb.array([])
      // skillArrayForm: this.fb.group(
      //   (
      //     [this.initSkill()]
      //   ))
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

    //this.myDoc = this.afs.doc('contacts/test2').valueChanges();
    this.myDoc = this.afs.doc('contacts/' + this.resumename).valueChanges();
  }


  navigateToFoo(){
    // changes the route without moving from the current view or
    // triggering a navigation event
    this.router.navigate([], {
     relativeTo: this.activatedRoute,
     queryParams: {
       'jid': this.resumename
     },
     queryParamsHandling: 'merge', 
     // preserve the existing query params in the route
     skipLocationChange: false
     // do not trigger navigation
   });
  
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
