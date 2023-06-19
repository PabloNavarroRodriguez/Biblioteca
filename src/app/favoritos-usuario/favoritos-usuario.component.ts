import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favoritos-usuario',
  templateUrl: './favoritos-usuario.component.html',
  styleUrls: ['./favoritos-usuario.component.css']
})
export class FavoritosUsuarioComponent {

  constructor(private conexion_usuario:UsuarioServiceService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('BookABook - MisFavoritos');
  }

  getFavs(){
    console.log(this.conexion_usuario.getFavs());
    return this.conexion_usuario.getFavs();
  }

    isFav(libro_id: number) {
      var favoritos = this.conexion_usuario.getFavs();
      if (favoritos) {
        var arrayFav= favoritos;
        for (let i = 0; i < arrayFav.length; i++) {
          if(arrayFav[i].libroId == libro_id){
            return true;
          }
        }
      }
      return false;
    }

    addFav(libro_id:number){
      this.conexion_usuario.addFav(libro_id);
    }

    removeFav(libro_id:number){
      this.conexion_usuario.addFav(libro_id);
    }
    isLogueado(){
      return this.conexion_usuario.isLogueado();
    }
  }

