import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus() {

    this.socket.on('connect', () => {
      console.log('Server is connected');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Server disconnected');
      this.socketStatus = false;
    });
  }
}
