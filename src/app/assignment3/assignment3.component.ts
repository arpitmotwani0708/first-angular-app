import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .counter {
      color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {

  showParagraph = false;
  secretPassword = 'tuna'
  buttonPressCount = [];
  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleParagraph() {
    if(this.showParagraph) this.showParagraph = false;
    else this.showParagraph = true;
    this.buttonPressCount.push(++this.counter);
  }

  getBackGroundColorGreaterThanCounterFive() {
    return (this.counter >= 5) ? 'blue' : '';
  }

}
