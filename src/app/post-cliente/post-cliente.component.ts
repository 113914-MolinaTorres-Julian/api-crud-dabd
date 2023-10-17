import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';

@Component({
  selector: 'app-post-cliente',
  templateUrl: './post-cliente.component.html',
  styleUrls: ['./post-cliente.component.css']
})
export class PostClienteComponent {
  datos = {
    nombre: '',
    telefono: '',
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    apellido: '',
    mail: '',
    categoriaFiscal: 'Monotributista',
    categoriaMonotributista: 'A'
  };
  
  resultado: any;

  constructor(private RestService:RestService) {}

  enviarDatos() {
    this.RestService.postCliente(this.datos).subscribe(
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
