import { Component, OnInit } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

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

  form: FormGroup;  
  submitted: boolean = false;

  producto : Producto;

  constructor(private productoService : ProductoService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,private router: Router
    ) { }

  ngOnInit() {
    this.producto = new Producto();
    this.form = this.formBuilder.group({ 
      nombre : [''],
      precio : [''],
      comentario : [''],
      estado : [''],
      fechaelaboracion : [''],
      fechavencimiento : ['']  
    });

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

  get f(){
    return this.form.controls;
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
        this.router.navigate(['producto/form']);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.producto = new Producto();
  }

}
