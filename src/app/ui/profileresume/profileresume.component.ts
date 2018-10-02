import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl  } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'
import { tap, first, take } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';


export interface DialogData {
  deletetype: 'experience' | 'education';
  displaytext: string;
}


@Component({
  selector: 'profileresume',
  templateUrl: './profileresume.component.html',
  styleUrls: ['./profileresume.component.scss']
})
export class ProfileresumeComponent implements OnInit {

  resumename: string;
  myForm: FormGroup;
  myDoc;

  typesOfJobs: string[] = ['Full time employee', 'Contractor', 'Intern'];
  skillList: string[]= ['.NET', 'Python', 'Django'];
  state: string;

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  selected:string = 'Project';
  constructor(private fb: FormBuilder, private afs: AngularFirestore, 
              public snackBar: MatSnackBar, public dialog: MatDialog,
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
      name: ['', Validators.required],
      location: ['', Validators.required],
      miniresume: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      jobsearchstatus: [''],
      jobtype: [''],
      desiredannualsalary: [''],
      desiredlocation: [''],
      opentoworkremotely: [''],
      legallyauthorized: [''],
      requiresponsorship: [''],
      linkedinurl: [''],
      websiteurl: [''],
      twitterurl: [''],
      githuburl: [''],
      skills: this.fb.array([]),
      //phones: this.fb.array([]),
      experiences: this.fb.array([])
    })
    //this.myDoc = this.afs.doc('contacts/test2').valueChanges();
    this.myDoc = this.afs.doc('resume/' + this.resumename).valueChanges();

    this.preloadData()
  }

  preloadData() {

    console.log('createId: ' + this.afs.createId())
    this.state = 'loading';

    //this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').valueChanges().pipe(
    this.afs.doc('resume/' + this.resumename).valueChanges().pipe(
      tap(data => {
        //this.myForm.patchValue(data);
        if (data) {
          console.log(JSON.stringify(data));

          this.myForm.controls['name'].setValue(data['name'])
          this.myForm.controls['location'].setValue(data['location'])
          this.myForm.controls['miniresume'].setValue(data['miniresume'])
          this.myForm.controls['role'].setValue(data['role'])
          this.myForm.controls['email'].setValue(data['email'])
          this.myForm.controls['message'].setValue(data['message'])

          this.myForm.controls['jobsearchstatus'].setValue(data['jobsearchstatus'])
          this.myForm.controls['jobtype'].setValue(data['jobtype'])
          this.myForm.controls['desiredannualsalary'].setValue(data['desiredannualsalary'])
          this.myForm.controls['desiredlocation'].setValue(data['desiredlocation'])
          this.myForm.controls['opentoworkremotely'].setValue(data['opentoworkremotely'])
          this.myForm.controls['legallyauthorized'].setValue(data['legallyauthorized'])
          this.myForm.controls['requiresponsorship'].setValue(data['requiresponsorship'])

          if (data['skills']) {
            console.log('skills : ' + JSON.stringify(data['skills']))
            data['skills'].forEach(item => {
              const skill = this.fb.group({
                skillname: [item['skillname']],
                skilllevel: [item['skilllevel']]
              })
              this.skillForms.push(skill);
            })
          }

          if (data['experiences']) {
            console.log('experiences : ' + JSON.stringify(data['experiences']))
            data['experiences'].forEach(item => {
              const experience = this.fb.group({

                project: [item['project']],
                title: [item['title']],
                company: [item['company']],
                //fromdate: [new FormControl(new Date(item['fromdate']*1000))],
                fromdate: new FormControl((new Date()).toISOString()),
                //fromdate: new FormControl((new Date(Date.parse(item['fromdate']))).toISOString()),
                location: [item['location']],
                projectdescription: [item['projectdescription']]
              })
              this.experienceForms.push(experience);
            })
          }
          else{
            console.log('no experience found')
          }
          //this.isAdding = false;
        }
        else{
          //this.isAdding = true;
        }
      }),
      take(1)
    )
      .subscribe()
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

  openSnackBar(message: string, action: string) {

    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);

  }

  openDialog(deltype: string, todelete:number) {
    //const dialogRef = this.dialog.open(DialogContentExampleDialog);

    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        deletetype: deltype,
        displaytext: 'todelete id: ' + todelete
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log('####' + result)
      if (result == true)
      {
        console.log('in result check true')
        switch (deltype)
        {
          case "experience":
            console.log('in switch case')
            this.deleteExperience(todelete)
            break;
          case "education":
            break;
        }
      }
    });
  }

  get skillForms() {
    //console.log(this.myForm.get('experiences').toString)
    return this.myForm.get('skills') as FormArray
  }

  get experienceForms() {
    //console.log(this.myForm.get('experiences').toString)
    return this.myForm.get('experiences') as FormArray
  }

  changeHandler(e) {
    // console.log(e)
    this.state = e;
  }

  addSkill() {
    console.log('in add skill')
    try{
      const skill = this.fb.group({
        skillname: [],
        skilllevel: []
      })
  
      this.skillForms.push(skill);
    }
    catch (err) {
      console.error(err)
    }
   
  }

  addExperience(input : HTMLInputElement) {
    console.log('####' + input.value)
    const experience = this.fb.group({
      project: [input.value],
      title: [],
      company: [],
      location: [],
      fromdate: [],
      projectdescription: []
    })

    this.experienceForms.push(experience);
  }

  deleteExperience(i) {
    console.log('in deleteExperience: ' + i)
    this.experienceForms.removeAt(i)
  }
  
  deleteSkill(i) {
    //console.log('deleteStill @ ')
    this.skillForms.removeAt(i)
  }

}



@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog { 
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}