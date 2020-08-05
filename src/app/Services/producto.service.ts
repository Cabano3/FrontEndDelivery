import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url : string = "https://localhost:44324/api/Productos";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
  };

  constructor(private http : HttpClient) { }

  save( p : Producto) : Observable<any> {
    let productoBody = JSON.stringify(p);
    if(p.idProducto === undefined){
      return this.http.post<any>(this.url, productoBody,this.httpOptions);
    }
    return this.http.put<any>(this.url, productoBody,this.httpOptions);
  } 

  retrieve(id : number) : Observable<Producto> {
    return this.http.get<Producto>(this.url + "/" + id,this.httpOptions);
  }

  delete(p : Producto) : Observable<any> {
    return this.http.delete<any>(this.url + "/" + p.idProducto, this.httpOptions);
  }

  list(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url, this.httpOptions);
  }
}
