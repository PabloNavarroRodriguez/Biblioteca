import { Component, ViewChild, ElementRef  } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  @ViewChild('nombreValue', {static: false}) nombreInput!: ElementRef;
  @ViewChild('apellidosValue', {static: false}) apellidosInput!: ElementRef;
  @ViewChild('fechaNacValue', {static: false}) fechaNacInput!: ElementRef;
  @ViewChild('telefonoValue', {static: false}) telefonoInput!: ElementRef;
  @ViewChild('codigoPostalValue', {static: false}) codigoPostalInput!: ElementRef;
  @ViewChild('usernameValue', {static: false}) usernameInput!: ElementRef;
  @ViewChild('emailValue', {static: false}) emailInput!: ElementRef;
  @ViewChild('passwordValue', {static: false}) passwordInput!: ElementRef;

  showErrorNombre = false;
  showErrorApellidos = false;
  showErrorFechaNac = false;
  showErrorTelefono = false;
  showErrorCodigoPostal = false;
  showErrorUsername = false;
  showErrorEmail = false;
  showErrorPassword = false;


  constructor(private conexion_api:UsuarioServiceService, private router:Router, private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle('BookABook - Registrarse');
  }

  comprobarEmail(email:string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  comprobarContraseña(passwd:string){
    const contraseñaRegex = /^(?=.*[0-9]).{6,}$/;
    return contraseñaRegex.test(passwd);
  }

  registrarse(email:string, username:string, passwd:string){
    const nombre = this.nombreInput.nativeElement.value;
    const apellidos = this.apellidosInput.nativeElement.value;
    const fechaNac = this.fechaNacInput.nativeElement.value;
    const telefono = this.telefonoInput.nativeElement.value;
    const codigoPostal = this.codigoPostalInput.nativeElement.value;

    if (!nombre || nombre.trim() === '') {
      this.showErrorNombre = true;
      this.nombreInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorNombre = false;
      this.nombreInput.nativeElement.style.borderColor = '';
    }

    if (!apellidos || apellidos.trim() === '') {
      this.showErrorApellidos = true;
      this.apellidosInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorApellidos = false;
      this.apellidosInput.nativeElement.style.borderColor = '';
    }

    if (!fechaNac || fechaNac.trim() === '') {
      this.showErrorFechaNac = true;
      this.fechaNacInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorFechaNac = false;
      this.fechaNacInput.nativeElement.style.borderColor = '';
    }

    if (!telefono || telefono.trim() === '') {
      this.showErrorTelefono = true;
      this.telefonoInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorTelefono = false;
      this.telefonoInput.nativeElement.style.borderColor = '';
    }

    if (!codigoPostal || codigoPostal.trim() === '') {
      this.showErrorCodigoPostal = true;
      this.codigoPostalInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorCodigoPostal = false;
      this.codigoPostalInput.nativeElement.style.borderColor = '';
    }

    if (!username || username.trim() === '') {
      this.showErrorUsername = true;
      this.usernameInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorUsername = false;
      this.usernameInput.nativeElement.style.borderColor = '';
    }

    if (!email || email.trim() === '' || !this.comprobarEmail(email)) {
      this.showErrorEmail = true;
      this.emailInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorEmail = false;
      this.emailInput.nativeElement.style.borderColor = '';
    }

    if (!passwd || passwd.trim() === '' || !this.comprobarContraseña(passwd)) {
      this.showErrorPassword = true;
      this.passwordInput.nativeElement.style.borderColor = 'red';
    } else {
      this.showErrorPassword = false;
      this.passwordInput.nativeElement.style.borderColor = '';
    }

    let hayError = this.showErrorNombre || this.showErrorApellidos || this.showErrorFechaNac || this.showErrorTelefono || this.showErrorCodigoPostal || this.showErrorUsername || this.showErrorEmail || this.showErrorPassword;

    if(!hayError){
      // this.conexion_api.registrarse(email, username, passwd);
      this.router.navigate(['/login']);
    }

  }
}
