import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';

@Component({
  selector: 'app-tarjeta-libro',
  templateUrl: './tarjeta-libro.component.html',
  styleUrls: ['./tarjeta-libro.component.css']
})
export class TarjetaLibroComponent {
  constructor(private conexion_api:ConexionAPIService){}

  get_libros(){
    return this.conexion_api.get_libros();
  }

  reservar(id:number){
    this.conexion_api.reservar(id);
  }
}
