import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import { FormGroup, FormBuilder, Validators, FormArray, FormControl  } from '@angular/forms'
import { tap, first, take } from 'rxjs/operators';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public title = 'Places';
  public addrKeys: string[];
  public addr: object;
  
  myForm: FormGroup;
  myDoc;
  state: string;

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

  constructor(private fb: FormBuilder, private afs: AngularFirestore, private zone: NgZone) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      location: [''],
      chosenlocations: this.fb.array([])
      }
    )

    this.myDoc = this.afs.doc('location/1').valueChanges();

    this.preloadData()
  }


  changeHandler(e) {
    console.log(e)
    //this.state = e;
  }
  locationprint(inVal: HTMLInputElement) {
    console.log(inVal.value);
    this.state = 'modified';
    //console.log(locationname.value);
  
  }

  get chosenlocationForms() {
    return this.myForm.get('chosenlocations') as FormArray
  }

  preloadData() {

    this.state = 'loading';

    this.afs.doc('location/1').valueChanges().pipe(
      tap(data => {
        //this.myForm.patchValue(data);
        if (data) {
          console.log(JSON.stringify(data));

          this.myForm.controls['location'].setValue(data['location'])
          //this.myForm.controls['locationname'].setValue(data['locationname'])
          
          if (data['chosenlocations']){
            data['chosenlocations'].forEach(item => {
              const pickedlocation = this.fb.group({
                locale : [item['location']]
              })
              
            });
          }

        }
      }),take(1)
    )
    .subscribe()
  }
    
}
