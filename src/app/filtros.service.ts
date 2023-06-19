import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  private tex:string= ""
  private sel:number= 0

  constructor( ) { }

  getTextFilter() {
    return this.tex
  }
  getSelectFilter() {
    return this.sel
  }

  setTextFilter(text:string) {
    this.tex = text
  }

  setSelectFilter(select:number) {
    this.sel = select
  }
}
