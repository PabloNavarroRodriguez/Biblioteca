import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  username:any;
  email:any;
  constructor(private usuario_service: UsuarioServiceService, private titleService: Title) {
    this.getUsername();
    this.getEmail();
  }

  ngOnInit() {
    this.titleService.setTitle('BookABook - MiPerfil');
  }

  getUsername() {
    this.username = this.usuario_service.getUsername();
  }

  getEmail() {
    this.email = this.usuario_service.getEmail();
  }

  isLogueado(){
    return this.usuario_service.isLogueado();
  }
}
