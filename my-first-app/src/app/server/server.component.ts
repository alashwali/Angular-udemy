import { Component } from '@angular/core';
@Component({
  // js object
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        color: brown;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStratus() {
    return this.serverStatus;
  }
}
