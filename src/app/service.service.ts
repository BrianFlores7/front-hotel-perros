import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api= "http://127.0.0.1:8000/";


  constructor(private client : HttpClient) {}
   
  getAll():Observable<any>{
    return this.client.get<any>('api/company/')
  }
  addRegistro(nombre_completo: string, telefono: number, diaLlegada: Date, diasEstancia: number):Observable<any>{
    
    var str = '{' + '"name": "' + nombre_completo + '", "number" :' + telefono + ', "date": "' + diaLlegada + '", "diasEstancia" :' + diasEstancia +'}'
    
    var obj = JSON.parse(str)

    return this.client.post('api/company/',obj);
  }
}