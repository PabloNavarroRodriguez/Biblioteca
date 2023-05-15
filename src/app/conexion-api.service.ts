import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  private url_API = "https://04b0-139-47-20-145.ngrok-free.app/libro/libros"; //OVEJA

  private libros : any;

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });

    this.http.get(this.url_API, {headers}).subscribe(response => {
      console.log(response);
      this.libros = response;
    });
  }




  // constructor(private http: HttpClient) {

  //   this.http.get(this.url_API).subscribe(resp => {
  //     this.libros = resp;
  //   });
  // }

  get_libros(){
      return this.libros;
    }
}
