import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { tap, first, take } from 'rxjs/operators';

@Component({
  selector: 'looking',
  templateUrl: './looking.component.html',
  styleUrls: ['./looking.component.scss']
})
export class LookingComponent implements OnInit {

  //firstFormGroup: FormGroup;
  myDoc;
  state: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private afs: AngularFirestore, private zone: NgZone) { }

  ngOnInit() {


    this.firstFormGroup = this._formBuilder.group({
      location: ['']
      }
    )

    this.myDoc = this.afs.doc('location/100').valueChanges();

    this.preloadData()

    this.firstFormGroup = this._formBuilder.group({
      location: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }


  changeHandler(e) {
    console.log(e)
    //this.state = e;
  }

  preloadData() {

    this.state = 'loading';

    this.afs.doc('location/100').valueChanges().pipe(
      tap(data => {
        //this.myForm.patchValue(data);
        if (data) {
          console.log(JSON.stringify(data));

          this.firstFormGroup.controls['location'].setValue(data['location'])
          
        }
      }),take(1)
    )
    .subscribe()
  }
    

}
