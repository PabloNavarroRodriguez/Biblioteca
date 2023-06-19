import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {

constructor(private titleService: Title){}

ngOnInit() {
  this.titleService.setTitle('BookABook - Actividades');
}


}
