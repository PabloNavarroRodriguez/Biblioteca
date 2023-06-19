import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { ConexionAPIService } from '../conexion-api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prestamos-admin',
  templateUrl: './prestamos-admin.component.html',
  styleUrls: ['./prestamos-admin.component.css']
})
export class PrestamosAdminComponent {

  fechaActual: Date = new Date();
  currentPage = 1; // Página actual
  itemsPorPagina = 10; // Número de elementos por página
  constructor(private usuario_conexion:UsuarioServiceService, private conexion_api:ConexionAPIService, private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle('BookABook - AdminPrestamos');
  }

  getAllPrestamos(){
    console.log(this.usuario_conexion.getAllPrestamos());
    return this.usuario_conexion.getAllPrestamos();
  }

  devolver(libroId:number, usuarioId:number){
    console.log(libroId);
    console.log(usuarioId);
    return this.usuario_conexion.devolver(libroId, usuarioId);
  }

  getTitulo(libroId:number){
    return this.conexion_api.getTitulo(libroId);
  }
  getPrestamosPaginados() {
    const prestamos = this.getAllPrestamos();
    const indiceInicial = (this.currentPage - 1) * this.itemsPorPagina;
    return prestamos.slice(indiceInicial, indiceInicial + this.itemsPorPagina);
  }

  getPaginas() {
    const prestamos = this.getAllPrestamos();
    const totalPaginas = Math.ceil(prestamos.length / this.itemsPorPagina);
    return Array(totalPaginas).fill(0).map((_, index) => index + 1);
  }

  getTotalPaginas() {
    const prestamos = this.getAllPrestamos();
    return Math.ceil(prestamos.length / this.itemsPorPagina);
  }
  isLogueado(){
    return this.usuario_conexion.isLogueado();
  }
  getRol(){
    return this.usuario_conexion.getRol();
  }

}
