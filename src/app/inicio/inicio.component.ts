import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {

  @ViewChild('reservados', { read: DragScrollComponent }) ds1!: DragScrollComponent;
  @ViewChild('incorporaciones', { read: DragScrollComponent }) ds2!: DragScrollComponent;

  ngAfterViewInit() {
  }

  moveLeftReservado() {
    this.ds1.moveLeft();
  }

  moveRightReservado() {
    this.ds1.moveRight();
  }

  moveLeftIncorporaciones() {
    this.ds2.moveLeft();
  }

  moveRight1Incorporaciones() {
    this.ds2.moveRight();
  }
}
