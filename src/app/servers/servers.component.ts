import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username='dummy.user'
  isUsernameEmpty = false;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  setUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username.length==0) this.isUsernameEmpty = true;
  }

  resetUsername() {
    this.isUsernameEmpty = true;
    this.username = '';
  }

  checkUsernameEmpty() {
    return this.isUsernameEmpty;
  }

}
