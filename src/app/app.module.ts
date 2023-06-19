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
import { RegistroComponent } from './registro/registro.component';
import { MostrarDetallesComponent } from './mostrar-detalles/mostrar-detalles.component';
import { PrestamosUsuarioComponent } from './prestamos-usuario/prestamos-usuario.component';
import { FavoritosUsuarioComponent } from './favoritos-usuario/favoritos-usuario.component';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { ListadoLibrosComponent } from './libros/listado-libros/listado-libros.component';
import { CrudLibrosAdminComponent } from './crud-libros-admin/crud-libros-admin.component';
import { LibroEditarComponent } from './libro-editar/libro-editar.component';
import { LibroCrearComponent } from './libro-crear/libro-crear.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PrestamosAdminComponent } from './prestamos-admin/prestamos-admin.component';
import { PipeFiltroPipe } from './pipes/pipe-filtro.pipe';
import { PipeSelectPipe } from './pipes/pipe-select.pipe';

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
    RegistroComponent,
    MostrarDetallesComponent,
    PrestamosUsuarioComponent,
    FavoritosUsuarioComponent,
    ReservasUsuarioComponent,
    PerfilUsuarioComponent,
    FiltrosComponent,
    ListadoLibrosComponent,
    CrudLibrosAdminComponent,
    LibroEditarComponent,
    LibroCrearComponent,
    FooterComponent,
    PrestamosAdminComponent,
    PipeFiltroPipe,
    PipeSelectPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
