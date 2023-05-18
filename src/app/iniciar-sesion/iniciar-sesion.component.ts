import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  constructor(private conexion_api:ConexionAPIService, private router:Router){}

  comprobarDatos(email:string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  iniciarSesion(email:string, passwd:string){
    if(email == "" || passwd==""){
      alert("Esta vacio");
    }
    if(this.comprobarDatos(email)){
      var msg = this.conexion_api.login(email, passwd);
      console.log(msg);
      // switch(msg){
      //   case "todo ok":
      //     this.router.navigate(['/home']);
      //     break;
      //   case "contraseña incorrecta":
      //     alert("La contraseña es errónea");
      //     break;
      //   case "email incorrecto":
      //     alert("El email es incorrecto");
      //     break;
      //   default:
      //     alert("No se que pasa jeje");
      //     break;
      // }

    } else {
      alert("No es un email");

    }
  }
}
