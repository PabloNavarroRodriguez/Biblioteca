import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  //private url_API = "https://a453-139-47-20-145.ngrok-free.app/libro/libros"; //OVEJA
  private url_API = "https://260a-88-148-30-115.eu.ngrok.io/libro/libros"; //Mia

  private libros : any;

  // constructor(private http: HttpClient) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   };

  //   this.http.get(this.url_API, httpOptions).subscribe(resp => {
  //     this.libros = resp;
  //   });
  // }

  // constructor(private http: HttpClient) {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*');

  //   this.http.get(this.url_API, { headers }).subscribe(resp => {
  //     this.libros = resp;
  //   });
  // }

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*',)
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      .set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    this.http.get(this.url_API, { headers }).subscribe(resp => {
      this.libros = resp;
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
