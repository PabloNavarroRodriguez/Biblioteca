import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ConexionAPIService } from '../conexion-api.service';
import { UsuarioServiceService } from '../usuario-service.service';
import { Location } from '@angular/common';
declare const bootstrap: any
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-mostrar-detalles',
  templateUrl: './mostrar-detalles.component.html',
  styleUrls: ['./mostrar-detalles.component.css']
})
export class MostrarDetallesComponent implements OnInit {
  libro:any
  calificacion=0
  constructor(private route: ActivatedRoute, private conexion_api: ConexionAPIService, private usuario_service:UsuarioServiceService, private location: Location, private router:Router, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('BookABook - DetallesLibro');
    this.route.params.subscribe(params => {
      this.libro = this.conexion_api.getLibroAMostrar();
    });
  }


  getAutorById(autorId:number){
    return this.conexion_api.getAutorById(autorId);
  }

  getGeneroById(generoId:number){
    return this.conexion_api.getGeneroById(generoId);
  }
  getEditorialById(editorialId:number){
    return this.conexion_api.getEditorialById(editorialId);
  }

  isLogueado(){
    return this.usuario_service.isLogueado();
  }
  calificar(puntuacion:number, libroId:number){
    this.usuario_service.calificar(puntuacion, libroId);
  }


  getCalificacion(libroId: number) {
  var calificaciones = this.usuario_service.getCalificaciones();
  for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i].libroId == libroId) {
      return calificaciones[i].calificacion;
    }
  }
  return 0;
  }

  getCalificacionMedia(libroId: number) {
    const calificaciones = this.conexion_api.get_media_calificaciones();
    for (let i = 0; i < calificaciones.length; i++) {
      if (calificaciones[i].libroId === libroId) {
        const mediaCalificaciones = parseFloat(calificaciones[i].media_calificaciones);
        if (!isNaN(mediaCalificaciones)) {
          return Math.ceil(mediaCalificaciones);
        }
      }
    }
    return 0;
  }

  goBack() {
    this.location.back();
  }

  getStock(libro_id:number):number{
    return this.conexion_api.getStock(libro_id);
  }

  reservar(libro_id:number){
    if(this.isLogueado()){
      this.usuario_service.reservar(libro_id);
      const toastLiveExample = document.getElementById('reservar');
      const toastBootstrap = new bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();

    } else {
      this.router.navigate(['/login'])
    }
  }

  prestar(libro_id:number){
    if(this.isLogueado()){
      if(this.usuario_service.prestar(libro_id)){
        const toastLiveExample = document.getElementById('prestar');
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastBootstrap.show();
      } else {
        const toastLiveExample = document.getElementById('noPrestar');
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastBootstrap.show();
      }

    } else {
      this.router.navigate(['/login'])
    }

  }
  mostrarMensaje(){
    const toastLiveExample = document.getElementById('debes_tener_prestado');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
  }

  estaReservado(libro_id:number){
    return this.usuario_service.estaReservado(libro_id);
  }

  estaPrestado(libro_id:number){
    return this.usuario_service.estaPrestado(libro_id);
  }

  cancelarReserva(libroId:number){
    const toastLiveExample = document.getElementById('noReservar');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    return this.usuario_service.cancelarReserva(libroId);
  }

  iniciarSesion(){
    this.router.navigate(['/login'])
  }

}
