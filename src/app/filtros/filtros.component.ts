import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';
import { FiltrosService } from 'src/app/filtros.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {

  constructor(private conexion_api:ConexionAPIService, private filter:FiltrosService){}

  selectedButton: any = null; // Este será el objeto género completo
  selectedButtonId: string | null = null; // Este será sólo el ID del género
  isSearchOpen = false;
  dropdownOpen = false;


  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  openSearch(inputElement: HTMLInputElement) {
    this.isSearchOpen = true;
    setTimeout(() => {
      inputElement.focus();
    }, 500); // Espera hasta que la animación esté completa antes de enfocar
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  toggleButton(genre: any): void {
    if (this.selectedButtonId === genre.id) {
        this.selectedButton = null;
        this.selectedButtonId = null;
        this.setSelectFilter(0); // Resetea el filtro en tu servicio si el mismo botón se selecciona nuevamente.
    } else {
        this.selectedButton = genre.id;
        this.selectedButtonId = genre.id;
        this.setSelectFilter(genre.id); // Configura el filtro en tu servicio al ID del género seleccionado.
    }
    this.dropdownOpen = false;
}

  get_libros(){
    return this.conexion_api.get_libros();
  }

  get_generos(){
    return this.conexion_api.get_generos();
  }

  setTextFilter(nombre:string) {
    this.filter.setTextFilter(nombre)
  }

  setSelectFilter(select:number) {
    this.filter.setSelectFilter(select)
  }
}
