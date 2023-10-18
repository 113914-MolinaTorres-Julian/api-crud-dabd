import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private postUrl = "https://my-json-server.typicode.com/113974-Olivera-Gustavo/api-clients-bd/clientes";

  constructor(private http:HttpClient) { }

  public getAllClientes(url:string) {
    return this.http.get(url);
  }

  public postCliente(cliente: any): Observable<any> {
    return this.http.post(this.postUrl, cliente);
  }
}
