import { Component, OnInit } from '@angular/core';
import { faIdCard, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { ProductoService } from 'src/app/Services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Models/producto';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  faIdCard = faIdCard;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  producto : Producto;

  constructor(private productoService : ProductoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.producto = new Producto();
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.productoService.retrieve(params['id']).subscribe(
            result => this.producto = result
          )
        }
      }
    );
  }

}
