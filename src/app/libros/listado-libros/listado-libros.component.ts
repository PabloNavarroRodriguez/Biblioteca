import { Component } from '@angular/core';
import { ConexionAPIService } from '../../conexion-api.service';
import { FiltrosService } from 'src/app/filtros.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent {

  constructor(private conexion_api:ConexionAPIService, private filter:FiltrosService){}

  get_libros(){
    return this.conexion_api.get_libros();
  }

  getTextFilter() {
    return this.filter.getTextFilter()
  }

  getSelectFilter() {
    return this.filter.getSelectFilter()
  }

  get_autores() {
    return this.conexion_api.get_autores();
  }

}
