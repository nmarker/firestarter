import { Component, EventEmitter, Input, Output, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'
import { tap, first, take } from 'rxjs/operators';

@Component({
  selector: 'postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  
  public title = 'Places';
  public addrKeys: string[];
  public addr: object;

  myForm: FormGroup;
  myDoc;
  state: string;

  typesOfJobs: string[] = ['Full time employee', 'Contractor', 'Intern'];
  listRole: string[] = ['Software Engineer', 'Product Manager', 'Designer'];
  constructor(private fb: FormBuilder, private afs: AngularFirestore, private zone: NgZone) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      jobtitle: [''],
      jobdescription: [''],
      jobtype: [''],
      primaryrole: [''],
      workexperience: [''],
      skillname: [''],
      location: [''],
      legallyauthorized: [''],
      canworkremotely: [''],
      requiresponsorship: [''],
      contactname: [''],
      companyname: [''],
      contactemail: [''],
      confirmcontactemail: [''],
      contactphonenumber1: [''],
      contactphonenumber2:['']
      //contactemail: ['', Validators.required, Validators.email]
      //chosenlocations: this.fb.array([])
      }
    )

    this.myDoc = this.afs.doc('jobs/1').valueChanges();

    this.preloadData()
  }


  preloadData() {

    this.state = 'loading';

    this.afs.doc('jobs/1').valueChanges().pipe(
      tap(data => {
        //this.myForm.patchValue(data);
        if (data) {
          console.log(JSON.stringify(data));

          this.myForm.controls['jobtitle'].setValue(data['jobtitle'])
          this.myForm.controls['jobdescription'].setValue(data['jobdescription'])
          this.myForm.controls['location'].setValue(data['location'])
          this.myForm.controls['canworkremotely'].setValue(data['canworkremotely'])
          
          this.myForm.controls['jobtype'].setValue(data['jobtype'])
          this.myForm.controls['primaryrole'].setValue(data['primaryrole'])
          this.myForm.controls['workexperience'].setValue(data['workexperience']);
          this.myForm.controls['skillname'].setValue(data['skillname']);

          
          
          this.myForm.controls['legallyauthorized'].setValue(data['legallyauthorized']);
          this.myForm.controls['requiresponsorship'].setValue(data['requiresponsorship']);


          this.myForm.controls['contactname'].setValue(data['contactname']);
          this.myForm.controls['companyname'].setValue(data['companyname']);
          this.myForm.controls['contactemail'].setValue(data['contactemail']);
          this.myForm.controls['confirmcontactemail'].setValue(data['confirmcontactemail']);
          this.myForm.controls['contactphonenumber1'].setValue(data['contactphonenumber1']);
          this.myForm.controls['contactphonenumber2'].setValue(data['contactphonenumber2']);
          //this.myForm.controls[''].setValue(data['']);

          // if (data['chosenlocations']){
          //   data['chosenlocations'].forEach(item => {
          //     const pickedlocation = this.fb.group({
          //       locale : [item['location']]
          //     })
              
          //   });
          // }

        }
      }),take(1)
    )
    .subscribe()
  }


  changeHandler(e) {
    console.log(e)
    //this.state = e;
  }


  //Method to be invoked everytime we receive a new instance 
  //of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    //console.log(JSON.stringify(addrObj))
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      console.log(addrObj['formatted_address'])
      //this.myForm.controls['location'].setValue(addrObj)
      this.myForm.controls['location'].setValue(addrObj['formatted_address'])
      
      //this.myForm.addControl('location', new FormControl('formatted_address'));
      
      this.myForm.addControl('locationname', new FormControl(addrObj, Validators.required));
      //this.state = 'modified';
    });
  }
  locationprint(inVal: HTMLInputElement) {
    console.log(inVal.value);
    this.state = 'modified';
    //console.log(locationname.value);
  
  }

  step = 1;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getErrorMessage() {
    return this.myForm.controls['contactemail'].hasError('required') ? 'You must enter a value' :
    this.myForm.controls['contactemail'].hasError('email') ? 'Not a valid email' :
            '';
  }
}
