import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';
import { UsuarioServiceService } from '../usuario-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css']
})
export class LibroCrearComponent {
  libro:any={};

  constructor(private conexion_api:ConexionAPIService, private usuario_service:UsuarioServiceService, private location: Location, private router:Router) { }


  guardarCambios() {
    if(!this.libro.titulo|| !this.libro.isbn || !this.libro.stock_disponible || !this.libro.stock_total || !this.libro.fecha_publicacion || !this.libro.autorId || !this.libro.generoId || !this.libro.editorialId || !this.libro.image || !this.libro.sinopsis){
      alert("No puede haber campos vacios");
    } else {
      if(this.conexion_api.existeISBN(this.libro.isbn)){
        alert("¡ISBN REPETIDO!, indique uno válido por favor");
      } else {
        this.conexion_api.crearLibro(this.libro);
        this.router.navigate(['/editarLibros']);
      }
    }
  }


  getAutores(){
    return this.conexion_api.get_autores();
  }

  getEditoriales(){
    return this.conexion_api.get_editoriales();
  }

  getGeneros(){
    return this.conexion_api.get_generos();
  }

  goBack() {
    this.location.back();
  }
  isLogueado(){
    return this.usuario_service.isLogueado();
  }
  getRol(){
    return this.usuario_service.getRol();
  }

}
