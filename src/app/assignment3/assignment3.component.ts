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
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleParagraph() {
    if(this.showParagraph) this.showParagraph = false;
    else this.showParagraph = true;
    this.buttonPressCount.push(this.buttonPressCount.length+1);
  }

  getBackGroundColorGreaterThanCounterFive() {
    return (this.buttonPressCount.length >= 5) ? 'blue' : 'transparent';
  }

}
