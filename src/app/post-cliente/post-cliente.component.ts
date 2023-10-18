import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';

@Component({
  selector: 'app-post-cliente',
  templateUrl: './post-cliente.component.html',
  styleUrls: ['./post-cliente.component.css']
})
export class PostClienteComponent {
  cliente = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    tipoDocumento: '',
    numeroDocumento: '',
    categoriaFiscal: '',
    categoriaMonotributista: ''
  };

  resultado: any;
  monotributoBoolean:boolean = false;
  constructor(private RestService:RestService) {}

  monotributo(){
    return this.monotributoBoolean = true;
  }
  
  crearCliente() {
    this.RestService.postCliente(this.cliente).subscribe(
      (response) => {
        this.resultado = response;
        console.log('POST Exitoso: ', this.resultado);
      },
      (error) => {
        console.log('POST con errores: ', error);
      }
    );
  }

}
