import { Component } from '@angular/core';
import { ConexionAPIService } from '../conexion-api.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  constructor(private conexion_api:ConexionAPIService){}

  isLogueado() {
    return this.conexion_api.isLogueado();
  }
}
