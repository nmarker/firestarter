import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  animal: string;
  name: string;

  selected = 'Project';

  constructor(private fb: FormBuilder, private afs: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit() {
    
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      miniresume: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      phones: this.fb.array([]),
      experiences: this.fb.array([])
    })

    this.preloadData()
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  get experienceForms() {
    return this.myForm.get('experiences') as FormArray
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }
  
  addExperience() {
  
    const experience = this.fb.group({ 
      project: [],
      company:[],
      location:[],
      fromdate:[],
      projectdescription:[]
    })
  
    this.experienceForms.push(experience);
  }

  addPhone() {
  
    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })
  
    this.phoneForms.push(phone);
  }
  
  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

  deleteExperience(i){
    this.experienceForms.removeAt(i)
  }
  savedata(){
    const formValue = this.myForm.value;

    try {
      //this.afs.collection('contacts').add(formValue);
      this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').update(formValue)
      this.success = true;
    } catch(err) {
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
    this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').valueChanges().pipe(
      tap(data => {
        //this.myForm.patchValue(data);
        if (data){
        console.log(JSON.stringify(data));
  
        this.myForm.controls['name'].setValue(data['name'])     
        this.myForm.controls['location'].setValue(data['location'])     
        this.myForm.controls['miniresume'].setValue(data['miniresume'])     
        this.myForm.controls['role'].setValue(data['role'])      
        this.myForm.controls['email'].setValue(data['email'])
        this.myForm.controls['message'].setValue(data['message'])
        //this.myForm.controls['phones'].setValue(this.fb.array([{"area":"123", "line":"", "prefix":""}]))
        //this.myForm.controls['phones'].setValue(this.fb.array([{"area":"1312","line":"q3332","prefix":"13"},{"area":"13123","line":"123123","prefix":"123123"},{"area":"13123","line":"123123","prefix":"123123"}]))
        //this.myForm.controls['phones'].setValue(this.fb.array([]))
        //const phone = this.fb.group({ 
        //  area: ['123'],
        //  prefix: ['456'],
        //  line: ['7890'],
        //})
        //console.log(data['phones'][0]['area'])
        if (data['phones']){
          data['phones'].forEach(item => {
            console.log(item['area'] + ':' + item['line'] + ':' + item['prefix'])  
            const phone = this.fb.group({ 
              area: [item['area']],
              prefix: [item['line']],
              line: [item['prefix']],
            })
            this.phoneForms.push(phone);
          })
        }

        if (data['experiences']){
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
        
        //this.phoneForms.push(phone);
      }
      })
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}