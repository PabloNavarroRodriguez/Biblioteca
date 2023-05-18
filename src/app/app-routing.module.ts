import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { Error404Component } from './error404/error404.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"libros", component:LibrosComponent},
  {path:"actividades", component:ActividadesComponent},
  {path:"login", component:IniciarSesionComponent},
  {path:"register", component:RegistroComponent},
  {path:"", pathMatch:"full", redirectTo:"home"},
  {path:"**", component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
