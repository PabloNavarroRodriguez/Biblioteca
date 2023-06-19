import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { Error404Component } from './error404/error404.component';
import { RegistroComponent } from './registro/registro.component';
import { MostrarDetallesComponent } from './mostrar-detalles/mostrar-detalles.component';
import { ReservasUsuarioComponent } from './reservas-usuario/reservas-usuario.component';
import { PrestamosUsuarioComponent } from './prestamos-usuario/prestamos-usuario.component';
import { FavoritosUsuarioComponent } from './favoritos-usuario/favoritos-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PrestamosAdminComponent } from './prestamos-admin/prestamos-admin.component';
import { CrudLibrosAdminComponent } from './crud-libros-admin/crud-libros-admin.component';
import { LibroCrearComponent } from './libro-crear/libro-crear.component';
import { LibroEditarComponent } from './libro-editar/libro-editar.component';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"libros", component:LibrosComponent},
  {path:"actividades", component:ActividadesComponent},
  {path:"login", component:IniciarSesionComponent},
  {path:"register", component:RegistroComponent},
  {path:"detalles/:id", component:MostrarDetallesComponent},
  {path:"misReservas", component:ReservasUsuarioComponent},
  {path:"misPrestamos", component:PrestamosUsuarioComponent},
  {path:"misFavoritos", component:FavoritosUsuarioComponent},
  {path:"miPerfil", component:PerfilUsuarioComponent},
  {path:"verPrestamosAdmin", component:PrestamosAdminComponent},
  {path:"editarLibros", component:CrudLibrosAdminComponent},
  {path:"crearLibro", component:LibroCrearComponent},
  {path:"editarLibro/:id", component:LibroEditarComponent},
  {path:"", pathMatch:"full", redirectTo:"inicio"},
  {path:"**", component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
