import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first, take } from 'rxjs/operators';
import {
  MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

  resumename: string;
  isAdding = false;
  typesOfJobs: string[] = ['Full time employee', 'Contractor', 'Intern'];
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  skillList: string[]= ['.NET', 'Python', 'Django'];
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  animal: string;
  name: string;

  selected = 'Project';

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private fb: FormBuilder, private afs: AngularFirestore,
    public snackBar: MatSnackBar, public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

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
    
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.resumename = params['jid'];
    });

    if (this.resumename == undefined)
    {
      this.resumename = this.afs.createId();
      this.navigateToFoo();
    }


    this.preloadData()
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

  openSnackBar(message: string, action: string) {

    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);

  }

  openDialog() {
    // const dialogRef = this.dialog.open(DialogContentExampleDialog);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  get skillForms() {
    //console.log(this.myForm.get('experiences').toString)
    return this.myForm.get('skills') as FormArray
  }

  get experienceForms() {
    //console.log(this.myForm.get('experiences').toString)
    return this.myForm.get('experiences') as FormArray
  }

  // get phoneForms() {
    
  //   return this.myForm.get('phones') as FormArray
  // }

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

  addExperience() {

    const experience = this.fb.group({
      project: [],
      title: [],
      company: [],
      location: [],
      fromdate: [],
      projectdescription: []
    })

    this.experienceForms.push(experience);
  }

  // addPhone() {

  //   const phone = this.fb.group({
  //     area: [],
  //     prefix: [],
  //     line: [],
  //   })

  //   this.phoneForms.push(phone);
  // }

  // deletePhone(i) {
  //   this.phoneForms.removeAt(i)
  // }

  deleteExperience(i) {
    this.experienceForms.removeAt(i)
  }
  
  deleteSkill(i) {
    //console.log('deleteStill @ ')
    this.skillForms.removeAt(i)
  }

  async savedata() {
    const formValue = this.myForm.value;

    try {
      //this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').update(formValue)
      
      if (this.isAdding){
        await this.afs.doc('contacts/' + this.resumename).set(formValue, {merge:true})
      }
      else
      {
        await this.afs.doc('contacts/' + this.resumename).update(formValue)
      }
      
      this.openSnackBar('saved','')
      this.success = true;
    } catch (err) {
      console.error(err)
    }

  }

  
  // async submitHandler() {
  //   this.loading = true;

  //   const formValue = this.myForm.value;

  //   try {
  //     await this.afs.collection('contacts').add(formValue);
  //     this.success = true;
  //   } catch(err) {
  //     console.error(err)
  //   }

  //   this.loading = false;
  // }

  preloadData() {

    console.log('createId: ' + this.afs.createId())

    //this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').valueChanges().pipe(
    this.afs.doc('contacts/' + this.resumename).valueChanges().pipe(
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

          //this.myForm.controls['phones'].setValue(this.fb.array([{"area":"123", "line":"", "prefix":""}]))
          //this.myForm.controls['phones'].setValue(this.fb.array([{"area":"1312","line":"q3332","prefix":"13"},{"area":"13123","line":"123123","prefix":"123123"},{"area":"13123","line":"123123","prefix":"123123"}]))
          //this.myForm.controls['phones'].setValue(this.fb.array([]))
          //const phone = this.fb.group({ 
          //  area: ['123'],
          //  prefix: ['456'],
          //  line: ['7890'],
          //})
          //console.log(data['phones'][0]['area'])

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


          // if (data['phones']) {
          //   data['phones'].forEach(item => {
          //     console.log(item['area'] + ':' + item['line'] + ':' + item['prefix'])
          //     const phone = this.fb.group({
          //       area: [item['area']],
          //       prefix: [item['line']],
          //       line: [item['prefix']],
          //     })
          //     this.phoneForms.push(phone);
          //   })
          // }

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
          //this.phoneForms.push(phone);
          this.isAdding = false;
        }
        else{
          this.isAdding = true;
        }
      }),
      take(1)
    )
      .subscribe()
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog { }