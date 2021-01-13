import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})
export class ServersComponent implements OnInit {

  serverId:number = 10;
  serverStatus:string = 'offline'
  
  constructor() {
    this.serverStatus = (Math.random() > 0.5) ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
