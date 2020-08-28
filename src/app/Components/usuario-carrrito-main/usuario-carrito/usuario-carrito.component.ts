import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import {faPlusSquare, faSearch} from '@fortawesome/free-solid-svg-icons'
import * as moment from 'moment/moment';
import { DatePipe } from '@angular/common';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-usuario-carrito',
  templateUrl: './usuario-carrito.component.html',
  styleUrls: ['./usuario-carrito.component.css']
})
export class UsuarioCarritoComponent implements OnInit {

  faPlusSquare = faPlusSquare;

  p : number = 1;
  disponible : string = "D";

  //listado productos que llegan de la base de datos
  productos : Producto[];
  producto : Producto;
  
  constructor(private productoService : ProductoService) { }

  ngOnInit() {
    this.searchProducto();
  }
  //trae todos los productos disponibles que se encuentren en la base de datos
  searchProducto() : void {
    this.productoService.search(this.disponible).subscribe(
      result => this.productos = result
    )
  }

  productoSelect(id : number): void{
    this.productoService.retrieve(id).subscribe(
      result => this.producto = result
    );
  }



 
 

}
