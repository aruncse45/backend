import { Module } from '@nestjs/common';
import { WebSocketController } from './web-socket.controller';
import { WebSocketService } from './web-socket.service';

@Module({
  controllers: [WebSocketController],
  providers: [WebSocketService]
})
export class WebSocketModule {}
