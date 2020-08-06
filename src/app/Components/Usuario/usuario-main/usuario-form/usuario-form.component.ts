import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/Models/usuario';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

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

  usuario : Usuario;
  title: string = "Nuevo Usuario";
  @Output() flagToReload = new EventEmitter<Boolean>();


  constructor(private usuarioService : UsuarioService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() : void {
    this.usuario = new Usuario();
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      correo: [''],      
      usuariosesion: [''],      
      contrasena: [''],      
      rol: ['']      
    });

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.usuarioService.retrieve(params['id']).subscribe(
            result => this.usuario = result
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

    this.usuarioService.save(this.usuario).subscribe(
      result => {
        this.submitted = false;
        this.usuario = new Usuario();
        console.log(result);
        this.router.navigate(['usuario/form']);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.usuario = new Usuario();
  }

}
