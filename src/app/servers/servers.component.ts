import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = false ;
  serverCreationStatus = 'No server is created';
  serverName = 'TestServer';
  userNameStatus = 'noName';
  userName = 'Test Name' ;
  servers = ['TestServer', 'TestServer-2'];
  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreation = true ;
    this.servers.push(this.serverName) ;
    this.serverCreationStatus = 'Server is created! Name is: ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
   this.serverName = (<HTMLInputElement>event.target).value ;
   }
  onName() {
    this.userNameStatus = 'Name is : ' + this.userName ;
  }
}
