import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionStorageProvider } from '../session-storage/session-storage';

@Injectable()
export class ConexionDriverProvider {
  
  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type' : 'application/json',
      'loginfrom': 'mobile-driver'
    })
  };
  
  readonly URL = 'http://192.241.218.41:3000';

  constructor(private _http: HttpClient, private _sessionCtrl: SessionStorageProvider) {
  }

  agregarDriver(driver): Observable<any>{
    driver.employeeCode=null;
    driver.status=false;
    driver.ganancias=0;
    driver.fechaInicio=null;
    driver.gasifyPoints=0;
    driver.calificacion=0;
    driver.comentarios="N/A";
    driver.aprobado=false;
    console.log(driver);
    return this._http.post(this.URL + '/api/driver', driver);
  }

  verificarCredenciales(login):Observable<any> {
    console.log(login);
    return this._http.post(this.URL + '/login', login, this.httpOptions);
  }

  updateOrderDriver(order):Observable<any>{
    var data ={
      orderId:order,
      driverId: this._sessionCtrl.consultar_storage('driverId')
    }
    return this._http.post(this.URL+'/api/order/assign', data );
  }
  sendTicketPhoto(data):Observable<any>{
    return this._http.put(this.URL+'/api/orders/ticketfoto', data )
  }
  sendPlacaFoto(data):Observable<any>{
    return this._http.put(this.URL+'/api/orders/placafoto', data )
  }
  changeStatus(data):Observable<any>{
    return this._http.put(this.URL+'/api/orders/status', data )
  }

}