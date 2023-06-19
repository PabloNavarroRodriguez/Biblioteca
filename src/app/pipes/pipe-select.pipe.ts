import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSelect'
})
export class PipeSelectPipe implements PipeTransform {

  transform(items: any[], selectedGenreId: number): any[] {

    if(!items) return [];
    if(!selectedGenreId) return items;

    return items.filter(it => {
      return it.generoId === selectedGenreId;
    });
}


}
