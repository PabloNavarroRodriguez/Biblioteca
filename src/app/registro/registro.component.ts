import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private conexion_api:ConexionAPIService){}

  comprobarDatos(email:string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  registrarse(email:string, username:string, passwd:string){
    if(email == "" || passwd=="" || username==""){
      alert("Esta vacio");
    }
    if(this.comprobarDatos(email)){
      this.conexion_api.registrarse(email, username, passwd);
    } else {
      alert("No es un email");
    }
  }
}
