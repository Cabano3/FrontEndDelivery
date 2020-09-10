import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void{
  }

  
  login(usuariosesion:string, contrasena:string) {
    this.authService.login(usuariosesion, contrasena).subscribe(result=> {            
      console.log(result);
        Swal.fire({
          title : "Bienvenid@",
          text : "Ingreso satisfactorio de " + usuariosesion,
          icon : 'success'
        });
        this.router.navigate(['/']);      
    });    
  }

  logout():void{
  this.authService.logout();
  
  }


}
