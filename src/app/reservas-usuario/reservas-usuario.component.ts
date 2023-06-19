import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.css']
})
export class ReservasUsuarioComponent {
  fechaActual: Date = new Date();
  constructor(private usuario_conexion:UsuarioServiceService, private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle('BookABook - MisReservas');
  }

  getReservas(){
    console.log(this.usuario_conexion.getReservas());
    return this.usuario_conexion.getReservas();
  }
  cancelarReserva(libroId:number){
    return this.usuario_conexion.cancelarReserva(libroId);
  }

  isLogueado(){
    return this.usuario_conexion.isLogueado();
  }
}
