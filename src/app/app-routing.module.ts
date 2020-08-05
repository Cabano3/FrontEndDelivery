import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioMainComponent } from 'src/app/Components/Usuario/usuario-main/usuario-main.component';
import { UsuarioCardComponent } from 'src/app/Components/Usuario/usuario-main/usuario-card/usuario-card.component';
import { UsuarioFormComponent } from './Components/Usuario/usuario-main/usuario-form/usuario-form.component';
import { ProductoMainComponent } from './Components/Producto/producto-main/producto-main.component';
import { ProductoCardComponent } from './Components/Producto/producto-main/producto-card/producto-card.component';
import { ProductoFormComponent } from './Components/Producto/producto-main/producto-form/producto-form.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'usuarios', component: UsuarioMainComponent},
  {path: 'usuarios/:id', component: UsuarioCardComponent},
  {path: 'usuario/form', component: UsuarioFormComponent},
  {path: 'usuario/form/:id', component: UsuarioFormComponent},
  {path: 'productos', component: ProductoMainComponent},
  {path: 'productos/:id', component: ProductoCardComponent},
  {path: 'producto/form', component: ProductoFormComponent},
  {path: 'producto/form/:id', component: ProductoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
