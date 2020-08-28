import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/Services/pedido.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Pedido } from 'src/app/Models/pedido';
import { Usuario } from 'src/app/Models/usuario';
import { ActivatedRoute } from '@angular/router';
import { DetallePedido } from 'src/app/Models/detalle-pedido';

@Component({
  selector: 'app-cabecera-pedido-form',
  templateUrl: './cabecera-pedido-form.component.html',
  styleUrls: ['./cabecera-pedido-form.component.css']
})
export class CabeceraPedidoFormComponent implements OnInit {

  pedido : Pedido = new Pedido();
  usuarios : Usuario[];
  usuario : Usuario;
  detalle : DetallePedido[];

  form: FormGroup;  
  submitted: boolean = false;

  constructor(private pedidoService: PedidoService, private usuarioService : UsuarioService, private formBuilder: FormBuilder, private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      estadopedido: [Validators.required],
      idUsuario: [Validators.required]
    }); 
  }

  onSubmit() : void {
    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.pedidoService.save(this.pedido).subscribe(result => {
      console.log(result);
      this.usuario = new Usuario();      
    });
   
  }

  searchUsuario($event) : void {
    console.info($event.target.value);
    this.usuarioService.search($event.target.value).subscribe(
      result => this.usuarios = result
    )
  }

}
