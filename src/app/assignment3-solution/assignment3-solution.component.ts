import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3-solution',
  templateUrl: './assignment3-solution.component.html',
  styleUrls: ['./assignment3-solution.component.css']
})
export class Assignment3SolutionComponent implements OnInit {

  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length+1);
  }

}
