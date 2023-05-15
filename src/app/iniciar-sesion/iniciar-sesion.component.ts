import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  constructor(private conexion_api:ConexionAPIService){}

  comprobar_datos(email, passwd){

  }
  
  iniciarSesion(email, passwd){
    if(this.comprobar_datos(email,passwd)){

    }
  }
}
