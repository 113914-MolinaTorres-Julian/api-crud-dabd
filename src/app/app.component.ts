import { Component } from '@angular/core';
import { RestService } from './servicios/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-crud';
  public clientes:any = [];

  constructor(private RestService:RestService) {}

  ngOnInit(): void {
    // this.getClientes();
  }

  // public getClientes() {
  //   this.RestService.getAll('https://my-json-server.typicode.com/113974-Olivera-Gustavo/api-clients-bd/clientes').subscribe( response => {
  //     console.log(response);
  //     this.clientes = response;
  //   })
  // }
}
