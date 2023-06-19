import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeGenero'
})
export class PipeGeneroPipe implements PipeTransform {

  transform(libros: any[], gen: string): any[] {
    if (libros && libros.length && gen != "0") {
      return libros.filter( (c:any)=>c.genero == gen)
    } else
    return libros;
  }

  
}
