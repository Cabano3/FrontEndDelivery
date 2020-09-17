import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteVentas } from '../Models/reporte-ventas';

@Injectable({
  providedIn: 'root'
})
export class ReporteVentasService {

  url : string = "http://raiza1-001-site1.htempurl.com/PedidosClientesMes";
  url2 : string = "http://raiza1-001-site1.htempurl.com/ProductosVendidosMes";
  url3 : string = "http://raiza1-001-site1.htempurl.com/ProductosVendidos";
  url4 : string = "http://raiza1-001-site1.htempurl.com/PedidosClientes";
  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
  };

  constructor(private http : HttpClient) { }

  list(): Observable<any>{
    return this.http.get<any>(this.url, this.httpOptions);
  }

  listVentas(): Observable<any>{
    return this.http.get<any>(this.url2, this.httpOptions);
  }

  listProductos() : Observable<any>{
    return this.http.get<any>(this.url3, this.httpOptions);
  }

  listPedidos() : Observable<any>{
    return this.http.get<any>(this.url4, this.httpOptions);
  }
}
