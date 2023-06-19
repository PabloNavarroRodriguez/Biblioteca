import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionAPIService } from '../conexion-api.service';
import { Location } from '@angular/common';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-libro-editar',
  templateUrl: './libro-editar.component.html',
  styleUrls: ['./libro-editar.component.css']
})
export class LibroEditarComponent {

  libroId: number=0;
  libro:any;

  constructor(private route: ActivatedRoute, private conexion_api:ConexionAPIService, private location: Location, private usuario_service:UsuarioServiceService, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.libroId = parseInt(id,10);
        this.libro = this.conexion_api.getLibroById(this.libroId);
        const fechaDate = new Date(this.libro.fecha_publicacion);
        const fechaFormateada = fechaDate.toISOString().substring(0, 10);
        this.libro.fecha_publicacion = fechaFormateada;
        
      } else {
      }
    });
  }

  guardarCambios() {
    if(!this.libro.titulo|| !this.libro.ISBN || !this.libro.stock_disponible || !this.libro.stock_total || !this.libro.fecha_publicacion || !this.libro.autorId || !this.libro.generoId || !this.libro.editorialId || !this.libro.image || !this.libro.sinopsis){
      alert("No puede haber campos vacios");
    } else {
      if(this.conexion_api.existeISBNEdit(this.libro.id,this.libro.ISBN)){
        alert("¡ISBN REPETIDO!, indique uno válido por favor");
      } else {
        this.conexion_api.editarLibro(this.libro);
        this.router.navigate(['/editarLibros']);
      }
    }

  }


  getAutor(){
    return this.conexion_api.getAutorByIdCompleto(this.libro.autorId);
  }

  getGenero(){
    return this.conexion_api.getGeneroByIdCompleto(this.libro.generoId);
  }

  getEditorial(){
    return this.conexion_api.getEditorialByIdCompleto(this.libro.generoId);
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
