import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { Server } from 'socket.io';

@WebSocketGateway({
  //1
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnModuleInit {
  @WebSocketServer() //2
  server: Server;

  onModuleInit() {
    //3
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log(socket.connected);
    });
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody()
    data: any,
  ): Observable<WsResponse<any>> {
    console.log('Message receieved from the client ');
    console.log(data);
    return of({
      event: 'message',
      data: 'MESSAGE RETURNED FROM SERVER: HELLo',
    });
  }
}
