import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crud-libros-admin',
  templateUrl: './crud-libros-admin.component.html',
  styleUrls: ['./crud-libros-admin.component.css']
})
export class CrudLibrosAdminComponent {

  currentPage = 1; // Página actual
  itemsPorPagina = 10; // Número de elementos por página

  constructor(private conexion_api:ConexionAPIService, private router: Router, private usuario_service: UsuarioServiceService, private titleService: Title){}


  ngOnInit() {
    this.titleService.setTitle('BookABook - ListadoLibros');
  }

  getLibros(){
    return this.conexion_api.get_libros();
  }

  editarLibro(libro:any){
    this.router.navigate(['/editarLibro', libro.id]);
  }

  addLibro(){
    this.router.navigate(['/crearLibro']);
  }

  borrarLibro(libro:any){
    this.conexion_api.eliminarLibro(libro.id)
  }

  getLibrosPaginados(): any[] {
    const indiceInicial = (this.currentPage - 1) * this.itemsPorPagina;
    const indiceFinal = indiceInicial + this.itemsPorPagina;
    return this.getLibros().slice(indiceInicial, indiceFinal);
  }
  getTotalPaginas(): number {
    const totalLibros = this.getLibros().length;
    return Math.ceil(totalLibros / this.itemsPorPagina);
  }

  getPaginas(): number[] {
    const totalPaginas = this.getTotalPaginas();
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }
  isLogueado(){
    return this.usuario_service.isLogueado();
  }
  getRol(){
    return this.usuario_service.getRol();
  }


}
