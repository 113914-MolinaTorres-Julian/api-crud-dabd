import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-get-clientes',
  templateUrl: './get-clientes.component.html',
  styleUrls: ['./get-clientes.component.css']
})
export class GetClientesComponent {
  public clientes:any = [];
  public mostrarClientes = false;

  constructor(private RestService:RestService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  public cargarClientes() {
    this.getClientes();
    this.mostrarClientes = true;
  }

  public getClientes() {
    this.RestService.getAllClientes('https://my-json-server.typicode.com/113974-Olivera-Gustavo/api-clients-bd/clientes').subscribe( response => {
      console.log(response);
      this.clientes = response
    })
  }
}
