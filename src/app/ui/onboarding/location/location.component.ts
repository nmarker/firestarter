import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  public title = 'Places';
  public addrKeys: string[];
  public addr: object;
  
  //Method to be invoked everytime we receive a new instance 
  //of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    console.log(JSON.stringify(addrObj))
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
    });
  }

  constructor(private zone: NgZone) {}

  locationprint(inVal: HTMLInputElement) {
    console.log(inVal.value);
    //console.log(locationname.value);
  }
}
