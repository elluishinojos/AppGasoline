import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConexionNominatimProvider {

  constructor(public http: HttpClient) {
    
  }
  getAddress(coordinates):Observable<any>{
    return this.http.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+coordinates.lat+'&lon='+coordinates.lng+'&zoom=18&addressdetails=1')
  }

}
