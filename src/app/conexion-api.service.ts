import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  private url_API = "https://6f3c-139-47-20-145.ngrok-free.app";

  private libros:any;
  private flag:number = 0;


  constructor(private http: HttpClient) {
    localStorage.clear();
  }

  get_libros(){

    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    while (this.flag<=2) {
      this.flag = this.flag + 1
      this.http.get(this.url_API+"/libro/libros", {headers}).subscribe(response => {
        this.libros = response;
      });
    }
    return this.libros;
  }

  login(email:string, password:string){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    const body = {email, password};
    this.http.post(this.url_API+"/user/login", body, {headers}).subscribe(response => {
      var token = (response as any).token;
      var user_id = (response as any).user;
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", token);
    });
  }

  registrarse(email:string, nombre_usuario:string, password:string){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    const body = { email, nombre_usuario, password };
    this.http.post(this.url_API+"/user/register", body, {headers}).subscribe(response => {
      console.log(response);
    });
  }

  isLogueado(){
  if(localStorage.getItem("token") && localStorage.getItem("user_id")){
    return true;
  } else {
    return false;
  }
  }

  reservar(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    // const body = { email, nombre_usuario, password };
    // this.http.post(this.url_API+"/user/register", body, {headers}).subscribe(response => {
    //   console.log(response);
    // });
  }

}
