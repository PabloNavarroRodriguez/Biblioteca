import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  showError = false;

  constructor(private conexion_api:UsuarioServiceService, private router:Router, private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle('BookABook - IniciarSesion');
  }

  comprobarEmail(email:string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  iniciarSesion(email: string, passwd: string) {

    this.conexion_api.login(email, passwd)
    .then(msg => {
      console.log(msg)
      this.router.navigate(['/libros']);
    })
    .catch(error => {
      console.error(error);
      switch (error) {
        case "Contrasena incorrecta":
          console.log("ha entrado")
          this.showError = true;
          break;
        case "Email incorrecto, vuelva a probar":
          this.showError = true;
        break;
        default:
          alert("Error en la solicitud de inicio de sesión");
        break;
      }
      // if (!email || email.trim() === '' || !this.comprobarEmail(email)) {
      //   this.showErrorEmail = true;
      //   this.emailInput.nativeElement.style.borderColor = 'red';
      // } else {
      //   this.showErrorEmail = false;
      //   this.emailInput.nativeElement.style.borderColor = '';
      // }

      // if (!passwd || passwd.trim() === '') {
      //   this.showErrorPassword = true;
      //   this.passwordInput.nativeElement.style.borderColor = 'red';
      // } else {
      //   this.showErrorPassword = false;
      //   this.passwordInput.nativeElement.style.borderColor = '';
      // }
    });


  }

}
