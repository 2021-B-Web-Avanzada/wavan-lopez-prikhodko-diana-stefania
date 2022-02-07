import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) {
  }
  ejecutarEventHola() : Observable<any>{
    return this.socket.emit('hola', {
      nombre: 'Adrian'
    })
  }
}