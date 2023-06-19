import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConexionAPIService } from './conexion-api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private url_API = "https://303f-139-47-20-145.ngrok-free.app";
  private favoritos:any;
  private logueado:boolean;
  private reservas:any;
  private calificaciones:any;
  private prestamos:any;
  private allPrestamos:any;
  private actividades:any;
  private usuarioId:any;
  private username:any;
  private email:any;
  private token: any;
  private rol: any;
  private flag:number = 0;
  private toastAddFav = new Subject<void>();
  private toastDelFav = new Subject<void>();
  private toastPrestar = new Subject<void>();
  private toastNoPrestar = new Subject<void>();
  private toastReservar = new Subject<void>();
  private toastNoReservar = new Subject<void>();

  constructor(private http: HttpClient, private conexion_api:ConexionAPIService) {
    this.logueado = false;
  }

  showToastAddFav() {
    this.toastAddFav.next();
  }

  getToastAddFav() {
    return this.toastAddFav.asObservable();
  }

  showToastDelFav() {
    this.toastDelFav.next();
  }

  getToastDelFav() {
    return this.toastDelFav.asObservable();
  }

  showToastPrestar() {
    this.toastPrestar.next();
  }

  getToastPrestar() {
    return this.toastPrestar.asObservable();
  }

  showToastNoPrestar() {
    this.toastNoPrestar.next();
  }

  getToastNoPrestar() {
    return this.toastNoPrestar.asObservable();
  }

  showToastReservar() {
    this.toastReservar.next();
  }

  getToastReservar() {
    return this.toastReservar.asObservable();
  }

  showToastNoReservar() {
    this.toastNoReservar.next();
  }

  getToastNoReservar() {
    return this.toastNoReservar.asObservable();
  }

  login(email: string, password: string): Promise<string> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any"
    });

    const body = { email, password };

    return new Promise<string>((resolve, reject) => {
      this.http.post(this.url_API + "/user/login", body, { headers }).subscribe(response => {
        if ((response as any).token && (response as any).user) {
          var token = (response as any).token;
          var user_id = (response as any).user;
          this.rol = (response as any).rol;
          this.username = (response as any).username;
          this.email = (response as any).email;
          this.usuarioId = user_id;
          this.token = token;
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", user_id);
          this.logueado = true;
          this.inicializarValores();
          if(this.rol==1){
            this.getAllPrestamos();
          }
          resolve("logueado");
        } else {
          const errorMessage = (response as any).message;
          reject(errorMessage);
        }
      }, error => {
        reject("Error en la solicitud HTTP");
      });
    });
  }

  getAllPrestamos(){
    if(!this.allPrestamos){
      const headers = new HttpHeaders({
        "ngrok-skip-browser-warning":"any",
        "authorization": this.token !== null ? this.token : ""
      });
      const body = { };
      this.http.post(this.url_API+"/libro/adminAllPrestamos", body, {headers}).subscribe(response => {
        this.allPrestamos = response;
      });
    }
    return this.allPrestamos;
  }

  inicializarValores(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any",
      "authorization": this.token !== null ? this.token : ""
    });

    const body = { usuarioId: this.usuarioId };
    this.http.post(this.url_API+"/user/allFavsByUser", body, {headers}).subscribe(response => {
      this.favoritos = response;
    });

    this.http.post(this.url_API+"/user/allPrestamosByUser", body, {headers}).subscribe(response => {
      this.prestamos = response;
    });

    this.http.post(this.url_API+"/user/allReservasByUser", body, {headers}).subscribe(response => {
      this.reservas = response;
    });

    this.http.post(this.url_API+"/user/getAllReservasActividades", body, {headers}).subscribe(response => {
      this.actividades = response;
    });

    this.http.post(this.url_API+"/user/allCalificacionesByUserSQL", body, {headers}).subscribe(response => {
      this.calificaciones = response;
    });
  }

  addFav(libroId:number){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });
    const body = { libroId, usuarioId:this.usuarioId };
    this.http.post(this.url_API + "/user/toggleFav", body, { headers }).subscribe(response => {
      this.favoritos.push(response);
      return this.favoritos;
    });
  }

  removeFav(libroId:number){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });
    const body = { libroId, usuarioId:this.usuarioId };
    this.http.post(this.url_API + "/user/toggleFav", body, { headers }).subscribe(response => {
      for (let i = 0; i < this.favoritos.length; i++) {
        if(this.favoritos[i].id == libroId){
          this.favoritos.splice(i, 1);
          return this.favoritos;
        }
      }
    });
  }

  registrarse(email:string, nombre_usuario:string, password:string){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    const body = { email, nombre_usuario, password };
    this.http.post(this.url_API+"/user/register", body, {headers}).subscribe(response => {
    });
  }

  isLogueado(){
    return this.logueado;
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this.logueado = false;
  }

  reservar(libroId: number) {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });

    const body = { libroId, usuarioId:this.usuarioId };
    this.http.post(this.url_API + "/libro/bookAbook", body, { headers }).subscribe(response => {
      this.reservas.push(response);
    });
  }

  cancelarReserva(libroId: number) {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });

    // const usuarioId = localStorage.getItem("user_id");
    const body = { libroId, usuarioId:this.usuarioId };
    this.http.post(this.url_API + "/libro/cancelBookAbook", body, { headers }).subscribe(response => {
      for (let i = 0; i < this.favoritos.length; i++) {
        if(this.reservas[i].id == response){
          this.reservas.splice(i, 1);
          return this.reservas;
        }
      }
    });
  }

  prestar(libroId: number) {

    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });

    const body = { libroId, usuarioId: this.usuarioId };
    const prestamosVigentes = this.prestamos.filter((prestamo:any) => prestamo.vigente === 1);


    if(prestamosVigentes.length<3){
      this.http.post(this.url_API + "/libro/prestamoLibro", body, { headers }).subscribe(response => {
        const prestamo = { ...response, vigente: 1 };
        this.prestamos.push(prestamo);
        this.conexion_api.actualizarStock(libroId, -1);
      });
      return true;
    }
    return false;
  }

  calificar(calificacion: number, libroId:number) {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });

    const body = { calificacion, libroId, usuarioId: this.usuarioId };
    this.http.post(this.url_API + "/user/rateBook", body, { headers }).subscribe(response => {
      var datos = {
        libroId: libroId,
        calificacion: calificacion
      };
    const index = this.calificaciones.findIndex((item:any) => item.libroId === libroId);
    if (index !== -1) {
      this.calificaciones[index].calificacion = calificacion;
    } else {
      this.calificaciones.push(datos);
    }

    });
  }

  devolver(libroId: number, usuarioId:number) {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });

    const body = { libroId, usuarioId};
    this.http.post(this.url_API + "/libro/devolverLibro", body, { headers }).subscribe(response => {
      this.conexion_api.actualizarStock(libroId,1);
        for (let i = 0; i < this.allPrestamos.length; i++) {
          if (this.allPrestamos[i].usuarioId === usuarioId && this.allPrestamos[i].libroId===libroId ) {
            this.allPrestamos.splice(i, 1);
          }
        }
    });
  }

  getFavs(){
    return this.favoritos;
  }

  getReservas(){
    return this.reservas;
  }

  getPrestamos(){

    return this.prestamos;
  }

  getRol(){

    return this.rol;
  }

  getActividades(){
    return this.actividades;
  }

  getCalificacion(libroId: number) {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "any",
      "authorization": this.token !== null ? this.token : ""
    });

    const body = { libroId, usuarioId: this.usuarioId };

    return new Promise<any>((resolve, reject) => {
      this.http.post(this.url_API + "/user/bookRateByUser", body, { headers }).subscribe(response => {
          const calificacion = (response as any).calificacionDeLibroByUser.calificacion;
          resolve(calificacion);
      }, error => {
        reject("Error en la solicitud HTTP");
      });
    });
  }

  getCalificaciones() {

    return this.calificaciones;
  }
  getUsername() {

    return this.username;
  }
  getEmail() {

    return this.email;
  }

  estaReservado(libroId: number) {
    if(this.reservas){
      for (let i = 0; i < this.reservas.length; i++) {
        if (this.reservas[i].id === libroId) {
         return true;
        }
      }
    }
    return false;
  }

  estaPrestado(libroId: number) {
    if(this.prestamos){
      for (let i = 0; i < this.prestamos.length; i++) {
        if (this.prestamos[i].id === libroId && this.prestamos[i].vigente ===1) {
         return true;
        }
      }
    }

    return false;
  }




}
