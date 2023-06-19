import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  private url_API = "https://303f-139-47-20-145.ngrok-free.app";

  private libros:any=[];
  private autores:any=[];
  private editoriales:any=[];
  private generos:any=[];
  private libro:any;
  private media_calificaciones:any=[];
  private message:string;
  private flag:number = 0;


  constructor(private http: HttpClient) {
    localStorage.clear();
    this.inicializarValores();
    this.message="No iniciada la sesión";
  }

  inicializarValores(){
    this.get_libros();
    this.get_autores();
    this.get_generos();
    this.get_editoriales();
    this.get_media_calificaciones();
  }

  crearLibro(libro:any){
    var token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any",
      "authorization": token !== null ? token : ""
    });

    const body = {titulo:libro.titulo, ISBN:libro.isbn, generoId:libro.generoId, editorialId:libro.editorialId, autorId:libro.autorId, sinopsis:libro.sinopsis, fecha_publicacion:libro.fecha_publicacion, fecha_entrada: new Date(), stock_total:libro.stock_total, stock_disponible:libro.stock_disponible,image:libro.image};

    this.http.post(this.url_API+"/libro/libros", body, {headers}).subscribe(response => {
      this.libros.push(response);
    });

    return this.libros;
  }

  editarLibro(libro:any){
    var token = localStorage.getItem("token");

    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any",
      "authorization": token !== null ? token : ""
    });

    const body = {libroId:libro.id, titulo:libro.titulo, ISBN:libro.isbn, generoId:libro.generoId, editorialId:libro.editorialId, autorId:libro.autorId, sinopsis:libro.sinopsis, fecha_publicacion:libro.fecha_publicacion, fecha_entrada: libro.fecha_entrada, stock_total:libro.stock_total, stock_disponible:libro.stock_disponible,image:libro.image};

    this.http.post(this.url_API+"/libro/updateLibro", body, {headers}).subscribe(response => {

      const indice = this.libros.findIndex((l:any) => l.id === libro.id);
      if (indice !== -1) {
        this.libros[indice] = libro;
      }
    });

    return this.libros;
  }

  get_libros(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    if(this.libros.length>0){
      return this.libros
    } else {
      this.http.get(this.url_API+"/libro/libros", {headers}).subscribe(response => {
        this.libros = response;
      });
    }
    return this.libros;
  }

  get_autores(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    if(this.autores.length>0){
      return this.autores
    } else {
      this.http.get(this.url_API+"/autor/autores", {headers}).subscribe(response => {

        this.autores = response;
      });
    }
    return this.autores;
  }

  get_generos(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    if(this.generos.length>0){
      return this.generos
    } else {
      this.http.get(this.url_API+"/genero/generos", {headers}).subscribe(response => {
        this.generos = response;
      });
    }
    return this.generos;
  }


  get_editoriales(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    if(this.editoriales.length>0){
      return this.editoriales
    } else {
      this.http.get(this.url_API+"/editorial/editoriales", {headers}).subscribe(response => {
        this.editoriales = response;
      });
    }
    return this.editoriales;
  }

  getLibroById(libroId: number) {
    for (const libro of this.libros) {
      if (libroId === libro.id) {
        return libro;
      }
    }
    return null;
  }


  asignarLibro(libro:any){
    this.libro = libro;
  }

  isFav(libroId: number) {
    let flag = 1;
    while(flag <= 2){

     flag = flag + 1;
      return new Promise((resolve, reject) => {
        if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
          const token = localStorage.getItem("token");
          const usuarioId = localStorage.getItem("user_id");
          const headers = new HttpHeaders({
            "ngrok-skip-browser-warning": "any",
            "authorization": token !== null ? token : ""
          });
          const body = { libroId, usuarioId };
          this.http.post(this.url_API + "/user/isFav", body, { headers }).subscribe(response => {

            resolve(response === true); //??? === ¿¿¿¿
          });
        } else {
          resolve(false);
        }
      });
    }
    return false;
  }

  getLibroAMostrar() {
    if (this.libro) {
      return this.libro;
    }
  }

  getAutorById(autorId: number) {
    const autorEncontrado = this.autores.find((autor:any) => autor.id === autorId);
    if (autorEncontrado) {
      return autorEncontrado.nombre_autor;
    }
    return '';
  }
  getGeneroById(generoId: number) {
    const generoEncontrado = this.generos.find((genero:any) => genero.id === generoId);
    if (generoEncontrado) {
      return generoEncontrado.nombre;
    }
    return '';
  }
  getEditorialById(editorialId: number) {
    const editorialEncontrada = this.editoriales.find((editorial:any) => editorial.id === editorialId);
    if (editorialEncontrada) {
      return editorialEncontrada.nombre;
    }
    return '';
  }

  getStock(libroId: number): number {
    const libroEncontrado = this.libros.find((e: any) => libroId === e.id);
    if (libroEncontrado) {
      return libroEncontrado.stock_disponible;
    }
    return 0;
  }


  getAutorByIdCompleto(autorId: number) {
    const autorEncontrado = this.autores.find((autor:any) => autor.id === autorId);
    if (autorEncontrado) {
      return autorEncontrado;
    }
    return '';
  }
  getGeneroByIdCompleto(generoId: number) {
    const generoEncontrado = this.generos.find((genero:any) => genero.id === generoId);
    if (generoEncontrado) {
      return generoEncontrado;
    }
    return '';
  }
  getEditorialByIdCompleto(editorialId: number) {
    const editorialEncontrada = this.editoriales.find((editorial:any) => editorial.id === editorialId);
    if (editorialEncontrada) {
      return editorialEncontrada;
    }
    return '';
  }

  eliminarLibro(libroId: number) {
   var token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any",
      "authorization": token !== null ? token : ""
    });

    const body = { libroId };
    this.http.post(this.url_API+"/libro/deleteLibro", body, {headers}).subscribe(
      response => {
        const indice = this.libros.findIndex((libro:any) => libro.id === libroId);
        if (indice !== -1) {
          this.libros.splice(indice, 1);
        }
      },
      error => {
        alert("No puedes eliminar un libro que está en uso");
      }
    );
  }

  actualizarStock(libroId: number, num:number) {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id === libroId) {
        this.libros[i].stock_disponible = this.libros[i].stock_disponible + num;
        break;
      }
    }

  }

  getTitulo(libroId:number){
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id === libroId) {
        return this.libros[i].titulo;
      }
    }
  }

  existeISBN(isbn:string) {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].ISBN === isbn) {
        return true;
      }
    }
    return false;
  }

  existeISBNEdit(id:number,isbn:string) {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].ISBN === isbn && this.libros[i].id != id) {
        return true;
      }
    }
    return false;
  }

  get_media_calificaciones(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning":"any"
    });
    if(this.flag>0){
      return this.media_calificaciones
    } else {
      this.http.get(this.url_API+"/user/allCalificacionesFromAllLibros", {headers}).subscribe(response => {
        this.flag +=1;
        this.media_calificaciones = response;
      });
    }
    return this.media_calificaciones;
  }

}
