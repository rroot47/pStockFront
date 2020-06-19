import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl='/api/clients';
  choixmenu:string='A';
  public dataForm:FormGroup;

  constructor(private httpClient:HttpClient) { }

  getDataById(id:number):Observable<Object>{
      return this.httpClient.get('${this.baseUrl}/{id}');
  }
  createData(info:Object):Observable<Object>{
    return this.httpClient.post('${this.baseUrl}', info);
  }
  updateData(id:number, value:any):Observable<object>{
    return this.httpClient.put('${this.baseUrl}/{id}', value);
  }
  deleteData(id:number):Observable<any>{
    return this.httpClient.delete('${this.baseUrl}/{id}', {responseType:'text'});
  }

  getAll():Observable<any>{
    return this.httpClient.get('${this.baseUrl}');
  }


}
//lsof -t -i tcp:4200 | xargs kill -9
