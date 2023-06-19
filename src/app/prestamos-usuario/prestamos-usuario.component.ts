import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prestamos-usuario',
  templateUrl: './prestamos-usuario.component.html',
  styleUrls: ['./prestamos-usuario.component.css']
})
export class PrestamosUsuarioComponent {

  fechaActual: Date = new Date();
  currentPageDevueltos: number = 1;
  itemsPorPaginaDevueltos: number = 10;
  constructor(private usuario_conexion:UsuarioServiceService, private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle('BookABook - MisPrestamos');
  }

  getPrestamos(){
    return this.usuario_conexion.getPrestamos();
  }

  calcularFechaDevolucion(fechaActual: Date): Date {
    const fechaDevolucion = new Date(fechaActual.getTime() + (15 * 24 * 60 * 60 * 1000));
    return fechaDevolucion;
  }
  getPrestamosDevueltosPaginados() {
    const prestamosDevueltos = this.getPrestamos();
    const indiceInicial = (this.currentPageDevueltos - 1) * this.itemsPorPaginaDevueltos;
    return prestamosDevueltos.slice(indiceInicial, indiceInicial + this.itemsPorPaginaDevueltos);
  }
  getPaginasDevueltos() {
    const prestamosDevueltos = this.getPrestamos();
    const totalPaginasDevueltos = Math.ceil(prestamosDevueltos.length / this.itemsPorPaginaDevueltos);
    return Array(totalPaginasDevueltos).fill(0).map((_, index) => index + 1);
  }
  getTotalPaginasDevueltos() {
    const prestamosDevueltos = this.getPrestamos();
    return Math.ceil(prestamosDevueltos.length / this.itemsPorPaginaDevueltos);
  }
  isLogueado(){
    return this.usuario_conexion.isLogueado();
  }
}
