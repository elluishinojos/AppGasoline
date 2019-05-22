import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs';
import { SessionStorageProvider } from '../session-storage/session-storage';

@Injectable()
export class OrdersProvider {

  constructor( private _sessionCtrl: SessionStorageProvider) {
   
  }

  // connect(){
  //   var response =this.socket.connect()
  //   console.log(response);
  // }

  // disconnect(){
  //   console.log("desconectar");
  //   var response = this.socket.disconnect();
  //   console.log(response);
  // }

  // askForOrders(){
  //   var usuario = JSON.parse(this._sessionCtrl.consultar_storage('driver'));
  //   console.log(usuario);
  //   this.socket.emit("askForOrders", usuario);
  // }

  // getOrder(){
  //   let observable = new Observable(observer =>{
  //     this.socket.on('orderSent', (order) => {
  //       console.log(order);
  //       observer.next(order)
  //     });
  //   })
  //   return observable;
  // }
  // rejectOrder(order){
  //   let info ={
  //     order: order,
  //     driver: JSON.parse(this._sessionCtrl.consultar_storage('driver'))
  //   }
  //   this.socket.emit( "orderRejected", info);
  // }

  // acceptOrder(order){
  //   let info ={
  //     order: order,
  //     driver: JSON.parse(this._sessionCtrl.consultar_storage('driver'))
  //   }
  //   this.socket.emit( "orderAccepted", order);
  // }
}
