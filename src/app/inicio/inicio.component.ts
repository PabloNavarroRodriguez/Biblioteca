import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  ngAfterViewInit() {
    console.log(this.ds); // Debería imprimir una referencia válida a DragScrollComponent.
  }

  moveLeft() {
    console.log('Moving left');
    this.ds.moveLeft();
  }

  moveRight() {
    console.log('Moving right');
    this.ds.moveRight();
  }
}
