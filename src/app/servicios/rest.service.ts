import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private urlPost = "https://my-json-server.typicode.com/113974-Olivera-Gustavo/api-clients-bd/clientes";

  constructor(private http:HttpClient) { }

  public getAll(url:string) {
    return this.http.get(url);
  }

  public postCliente(datos: any): Observable<any> {
    return this.http.post(this.urlPost, datos);
  }
}
