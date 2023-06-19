import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';
import { UsuarioServiceService } from '../usuario-service.service';
declare const bootstrap: any
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  constructor(private conexion_api:ConexionAPIService, private usuario_service:UsuarioServiceService, private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle('BookABook - Libros');
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
}
