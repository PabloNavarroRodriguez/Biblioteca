import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaLibroComponent } from './tarjeta-libro/tarjeta-libro.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { Error404Component } from './error404/error404.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaLibroComponent,
    EncabezadoComponent,
    InicioComponent,
    LibrosComponent,
    ActividadesComponent,
    IniciarSesionComponent,
    Error404Component,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
