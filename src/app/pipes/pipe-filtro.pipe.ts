import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFiltro'
})
export class PipeFiltroPipe implements PipeTransform {

  transform(libros: any[], autores: any[], tex: string): any[] {
    if (!libros || !libros.length || !tex) return libros;

    return libros.filter(libro => {
      // Encuentra el autor del libro.
      const autor = autores.find(a => a.id === libro.autorId);
      const nombreAutor = autor ? autor.nombre_autor : '';

      // Comprueba si el título del libro o el nombre del autor contienen el texto de búsqueda.
      return libro.titulo.toLowerCase().includes(tex.toLowerCase()) || nombreAutor.toLowerCase().includes(tex.toLowerCase());
    });
  }


}
