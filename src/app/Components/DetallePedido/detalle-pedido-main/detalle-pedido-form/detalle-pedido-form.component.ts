import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetallePedido } from 'src/app/Models/detalle-pedido';
import { Pedido } from 'src/app/Models/pedido';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Models/producto';
import { DetallePedidoService } from 'src/app/Services/detalle-pedido.service';

@Component({
  selector: 'app-detalle-pedido-form',
  templateUrl: './detalle-pedido-form.component.html',
  styleUrls: ['./detalle-pedido-form.component.css']
})
export class DetallePedidoFormComponent implements OnInit {

  detalle : DetallePedido = new DetallePedido();
  pedido : Pedido;
  total : number = 0;

  producto : Producto;
  form : FormGroup;
  submitted : Boolean = false;

  constructor(private formBuilder: FormBuilder, private detalleService: DetallePedidoService, private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cantidad: ['', Validators.required],
      recargaentrega: ['', Validators.required],
      subtotal: ['', Validators.required],
      total: ['', Validators.required],
      idProducto: ['', Validators.required],
      idPedido: ['', Validators.required]
    }); 
  }

  onSubmit(): void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.detalleService.save(this.detalle).subscribe(
      result => {
        this.submitted = false;
        this.producto = new Producto();
        console.log(result);
        this.router.navigate(['cabecera']);
      }
    );
  }

  
}
