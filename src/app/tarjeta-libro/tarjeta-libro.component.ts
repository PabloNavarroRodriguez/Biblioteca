import { Component, Input } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-libro',
  templateUrl: './tarjeta-libro.component.html',
  styleUrls: ['./tarjeta-libro.component.css']
})
export class TarjetaLibroComponent {

  @Input() libro:any
  constructor(private conexion_api:ConexionAPIService, private usuario_service:UsuarioServiceService, private router:Router){}

  get_libros(){
    return this.conexion_api.get_libros();
  }

  reservar(libro_id:number){
    if(this.isLogueado()){
      this.usuario_service.reservar(libro_id);
      this.usuario_service.showToastReservar();

    } else {
      this.router.navigate(['/login'])
    }
  }

  prestar(libro_id:number){
    if(this.isLogueado()){
      if(this.usuario_service.prestar(libro_id)){
        this.usuario_service.showToastPrestar();
      } else {
        this.usuario_service.showToastNoPrestar();
      }

    } else {
      this.router.navigate(['/login'])
    }
  }

  isFav(libro_id: number) {
   var favoritos = this.usuario_service.getFavs();
   if(favoritos){
     if (favoritos.length>0) {
       for (let i = 0; i < favoritos.length; i++) {
         if(favoritos[i].id == libro_id){
           return true;
         }
       }
     }
   }
    return false;
  }

  addFav(libro_id:number){
    if(this.isLogueado()){
      this.usuario_service.addFav(libro_id);
      this.usuario_service.showToastAddFav();

    } else {
      this.router.navigate(['/login'])
    }
  }

  removeFav(libro_id:number){
    this.usuario_service.removeFav(libro_id);
    this.usuario_service.showToastDelFav();
  }

  asignarLibro(libro:any){
    this.conexion_api.asignarLibro(libro);
  }

  getStock(libro_id:number):number{
    return this.conexion_api.getStock(libro_id);
  }

  estaReservado(libro_id:number){
    return this.usuario_service.estaReservado(libro_id);
  }

  estaPrestado(libro_id:number){
    return this.usuario_service.estaPrestado(libro_id);
  }

  cancelarReserva(libroId:number){
    this.usuario_service.showToastNoReservar();
    return this.usuario_service.cancelarReserva(libroId);
  }

  isLogueado(){
    return this.usuario_service.isLogueado();
  }
}
