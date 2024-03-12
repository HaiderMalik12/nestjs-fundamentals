import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
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
  ) {
    console.log('Message receieved from the client ');
    console.log(data);
  }
}
