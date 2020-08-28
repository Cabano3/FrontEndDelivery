import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/Models/detalle-pedido';

@Component({
  selector: 'app-navbard',
  templateUrl: './navbard.component.html',
  styleUrls: ['./navbard.component.css']
})
export class NavbardComponent implements OnInit {

  detalle : DetallePedido;

  constructor() { }

  ngOnInit() {
  }

}
