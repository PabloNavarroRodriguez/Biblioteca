import { Component,ElementRef } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  constructor(private usuario_service:UsuarioServiceService, private elRef: ElementRef){}

  dropdownOpen = false;
  listener: any;

  ngAfterViewInit() {

    document.addEventListener('click', (event) => {
      var clickedInside = this.elRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.dropdownOpen = false;
      }
    });

    document.addEventListener('click', function(event) {
      var menuElement = document.getElementById('navbarText');
      if (menuElement) {
        var isClickInsideMenu = menuElement.contains(event.target as Node);
        var isMenuOpen = menuElement.classList.contains('show');
        if (!isClickInsideMenu && isMenuOpen) {
          var toggleButton = document.querySelector('.navbar-toggler') as HTMLElement;
          if (toggleButton) {
            toggleButton.click();
          }
        }
      }
    });
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.listener);
  }

  isLogueado() {
    return this.usuario_service.isLogueado();
  }

  cerrarSesion(){
    this.usuario_service.cerrarSesion();
  }

  getRol(){
    return this.usuario_service.getRol();
  }
}
