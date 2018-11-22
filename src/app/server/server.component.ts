import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  Servername = 'Suraj';
 serverId = 10;
 serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
