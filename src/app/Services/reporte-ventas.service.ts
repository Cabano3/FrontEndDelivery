import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteVentas } from '../Models/reporte-ventas';

@Injectable({
  providedIn: 'root'
})
export class ReporteVentasService {

  url : string = "https://localhost:44324/api/Reportes";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
  };

  constructor(private http : HttpClient) { }

  list(): Observable<ReporteVentas[]>{
    return this.http.get<ReporteVentas[]>(this.url, this.httpOptions);
  }
}
