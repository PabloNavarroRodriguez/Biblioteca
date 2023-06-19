import { Component, ViewChild, AfterViewInit } from '@angular/core';
//import { DragScrollComponent } from 'ngx-drag-scroll/public-api';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ConexionAPIService } from '../conexion-api.service';
import { UsuarioServiceService } from '../usuario-service.service';
declare const bootstrap: any
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {

  constructor(private conexion_api:ConexionAPIService, private usuario_service:UsuarioServiceService, private titleService: Title){}

  @ViewChild('reservados', { read: DragScrollComponent }) ds1!: DragScrollComponent;
  @ViewChild('incorporaciones', { read: DragScrollComponent }) ds2!: DragScrollComponent;

  ngOnInit(): void {
    this.titleService.setTitle('BookABook - Inicio');
    this.usuario_service.getToastAddFav().subscribe(() => {
    const toastLiveExample = document.getElementById('addFav');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    })

    this.usuario_service.getToastDelFav().subscribe(() => {
    const toastLiveExample = document.getElementById('delFav');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    })

    this.usuario_service.getToastPrestar().subscribe(() => {
    const toastLiveExample = document.getElementById('prestar');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    })

    this.usuario_service.getToastNoPrestar().subscribe(() => {
    const toastLiveExample = document.getElementById('noPrestar');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    })

    this.usuario_service.getToastReservar().subscribe(() => {
    const toastLiveExample = document.getElementById('reservar');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    })

    this.usuario_service.getToastNoReservar().subscribe(() => {
    const toastLiveExample = document.getElementById('noReservar');
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastBootstrap.show();
    })
  }

  get_libros(){
    return this.conexion_api.get_libros();
  }

  get_libros_ordenados_fecha() {
    var libros = this.conexion_api.get_libros();
    var librosOrdenados = libros.slice();

    librosOrdenados.sort((a: any, b: any) => {
      var fechaA = new Date(a.fecha_entrada);
      var fechaB = new Date(b.fecha_entrada);

      return fechaB.getTime() - fechaA.getTime();
    });

    return librosOrdenados;
  }

  ngAfterViewInit() {
  }

  moveLeftReservado() {
    this.ds1.moveLeft();
  }

  moveRightReservado() {
    this.ds1.moveRight();
  }

  moveLeftIncorporaciones() {
    this.ds2.moveLeft();
  }

  moveRight1Incorporaciones() {
    this.ds2.moveRight();
  }
}
