import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { WebSocketService } from "./web-socket.service";


@WebSocketGateway({
    cors: {
        origin: '*'
    },
})

export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    constructor(private readonly websocketService: WebSocketService) { }

    handleConnection(client: any, ...args: any[]) {

    }

    handleDisconnect(client: any) {

    }
}