import { Component, Inject, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl  } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'
import { tap, first, take } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, MatTooltipModule
} from '@angular/material';


export interface DialogData {
  deletetype: 'experience' | 'education';
  displaytext: string;
}


@Component({
  selector: 'addresume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.scss']
})
export class AddresumeComponent implements OnInit {


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

  public title = 'Places';
  public addrKeys: string[];
  public addr: object;
  
  constructor(private fb: FormBuilder, private afs: AngularFirestore, 
              public snackBar: MatSnackBar, public dialog: MatDialog,
                private activatedRoute: ActivatedRoute,
              private router: Router, private zone: NgZone) { 
    //this.resumename = this.revisedRandId();

  }

  //Method to be invoked everytime we receive a new instance 
  //of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      this.myForm.controls['location'].setValue(addrObj['formatted_address']);
    });
  }
  
  setexperienceAddress(addrObj, x)
  {
    console.log('in setexperienceAddress')
    console.log(' caller : ' + x.value)
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      //this.myForm.controls['location'].setValue(addrObj['formatted_address'];
      x.setValue(addrObj['formatted_address']);
      
    });

  }

  getFirestoreId(){
    return this.afs.createId();
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
      this.resumename = this.getFirestoreId();
      this.navigateToFoo();
    }

    this.myForm = this.fb.group({
      _id: [this.resumename],
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
      additionalskills: [''],
      //phones: this.fb.array([]),
      experiences: this.fb.array([]),
      educationalqualifications: this.fb.array([])
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
            //console.log('skills empty check : ' + Object.keys(data['skills']).length)

            data['skills'].forEach(item => {
              const skill = this.fb.group({
                skillname: [item['skillname']],
                skilllevel: [item['skilllevel']]
              })
              this.skillForms.push(skill);
              
            })
          }
          else
          {
            console.log('no skills')
            //there are no skills available in DB add three skills as default
            
          }

          this.myForm.controls['additionalskills'].setValue(data['additionalskills'])
          

          if (data['experiences']) {
            console.log('experiences : ' + JSON.stringify(data['experiences']))
            data['experiences'].forEach(item => {
              const experience = this.fb.group({

                project: [item['project']],
                title: [item['title']],
                company: [item['company']],
                fromdate: [new Date(this.toDateTime(item['fromdate'] ? item['fromdate']['seconds'] : ''))],
                todate: [new Date(this.toDateTime(item['todate'] ? item['todate']['seconds'] : ''))],
                currentlyemployed: [item['currentlyemployed']],
                location: [item['location']],
                projectdescription: [item['projectdescription']]
              })
              this.experienceForms.push(experience);
            })
          }
          else{
            console.log('no experience found')
          }


          

          if (data['educationalqualifications']) {
            console.log('educationalqualifications : ' + JSON.stringify(data['educationalqualifications']))
            data['educationalqualifications'].forEach(item => {
              const education = this.fb.group({

                collegeuniversityname: [item['collegeuniversityname']],
                dateofcompletion:  [new Date(this.toDateTime(item['dateofcompletion'] ? item['dateofcompletion']['seconds'] : ''))],
                degreetype: [item['degreetype']],
                majorfieldofstudy: [item['majorfieldofstudy']],
                
              })
              this.educationalqualificationsForms.push(education);
            })
          }
          else{
            console.log('no educationalqualifications found')
          }

          //this.isAdding = false;
        }
        else
        {
          //this.isAdding = true;
          var i;
            for (i = 0; i < 2; i++) {
              const skill = this.fb.group({
                skillname: '',
                skilllevel: ''
              })
              this.skillForms.push(skill);
            }
        }
      }),
      take(1)
    )
      .subscribe()
  }

  toDateTime(utcSeconds) {
    var returndate=""
    if(utcSeconds != null){
      var myDate = new Date( utcSeconds *1000);
      returndate = myDate.toLocaleString()
    }
    return returndate;
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

    const dialogRef = this.dialog.open(DeleteDialog, {
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
            this.deleteEducation(todelete)
            break;
        }
      }
    });
  }

  get skillForms() {
    return this.myForm.get('skills') as FormArray
  }

  get experienceForms() {
    return this.myForm.get('experiences') as FormArray
  }

  get educationalqualificationsForms() {
    return this.myForm.get('educationalqualifications') as FormArray
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

  saveSkill(skillName: HTMLInputElement, skilloutText: HTMLLabelElement) {
    console.log("skillName.value : " + skillName.value);

    if (skillName.value.trim() != '')
    {
      const skill = this.fb.group({
        skillname: [skillName.value],
        skilllevel: ['']  
      })

      this.skillForms.push(skill);
    }
  }

  addExperience(addtypevalue: HTMLInputElement, input : HTMLInputElement, outText: HTMLLabelElement) {
    console.log('####' + input.value)
    console.log('@@@' + addtypevalue.value)
    if (input.value.trim() != '')
    {
      const experience = this.fb.group({
        project: [input.value],
        title: [],
        company: [],
        location: [],
        fromdate: [],
        todate: [],
        currentlyemployed: [],
        projectdescription: []
      })

      this.experienceForms.push(experience);
    }
    else
    {

      //console.log('Project name required!!')
      //outText.textContent='Project name required!!'
    }
  }

  addSchool(SchoolName : HTMLInputElement, SchoolNameError: HTMLLabelElement) {

    if (SchoolName.value.trim() != '')
    {
      const school = this.fb.group({
        collegeuniversityname: [SchoolName.value],
        dateofcompletion: [],
        degreetype: [],
        majorfieldofstudy: []
      })

      this.educationalqualificationsForms.push(school);
    }
    else
    {

      //console.log('Project name required!!')
      //outText.textContent='Project name required!!'
    }
  }


  deleteExperience(i) {
    console.log('in deleteExperience: ' + i)
    this.experienceForms.removeAt(i)
    this.openSnackBar('Experience deleted.','Succes')
  }
  
  deleteSkill(i) {
    //console.log('deleteStill @ ')
    this.skillForms.removeAt(i)
  }

  deleteEducation(i) {
    this.educationalqualificationsForms.removeAt(i)
    this.openSnackBar('School deleted.','Succes')
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DeleteDialog { 
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}