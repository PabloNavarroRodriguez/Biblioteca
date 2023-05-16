import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  constructor(private conexion_api:ConexionAPIService){}

  comprobarDatos(email:string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  iniciarSesion(email:string, passwd:string){
    if(email == "" || passwd==""){
      alert("Esta vacio");
    }
    if(this.comprobarDatos(email)){
      this.conexion_api.login(email, passwd);
    } else {
      alert("No es un email");
    }
  }
}
