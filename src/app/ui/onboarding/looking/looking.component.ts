import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'looking',
  templateUrl: './looking.component.html',
  styleUrls: ['./looking.component.scss']
})
export class LookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
