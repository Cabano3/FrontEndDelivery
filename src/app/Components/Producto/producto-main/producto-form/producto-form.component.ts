import { Component, OnInit } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  title = "Registro de Producto";

  form: FormGroup;  
  submitted: boolean = false;

  producto : Producto;

  constructor(private productoService : ProductoService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,private router: Router
    ) { }

  ngOnInit() {
    this.producto = new Producto();
    this.form = this.formBuilder.group({ 
      nombre : ['', Validators.required],
      precio : ['', Validators.required],
      comentario : ['', Validators.required],
      estado : ['', Validators.required],
      fechaelaboracion : [''],
      fechavencimiento : ['']  
    });

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.productoService.retrieve(params['id']).subscribe(
            result => {
              this.producto = result;
              this.title = "Actualizando el registro de " + this.producto.nombre;
            }
          )
        }
      }
    );
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.productoService.save(this.producto).subscribe(
      result => {
        this.submitted = false;
        this.producto = new Producto();
        console.log(result);
        this.router.navigate(['productos']);
      }
    );

    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto: '+ this.producto.nombre + ' guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  get nombre(){return this.form.get('nombre');}
  get precio(){return this.form.get('precio');}
  get comentario(){return this.form.get('comentario');}

  onReset() : void {
    swal.fire({
      title: '¿Estas seguro que desea continuar?',
      text: "No se guardarán los cambios realizados.",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) =>{
      if(result.value){
        this.router.navigate(['productos']);
      }
    })
  }

}
