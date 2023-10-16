import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostClienteComponent } from './post-cliente/post-cliente.component';
import { PutClienteComponent } from './put-cliente/put-cliente.component';
import { GetClientesComponent } from './get-clientes/get-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PostClienteComponent,
    PutClienteComponent,
    GetClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
