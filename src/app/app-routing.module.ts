import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioMainComponent } from 'src/app/Components/Usuario/usuario-main/usuario-main.component';
import { UsuarioCardComponent } from 'src/app/Components/Usuario/usuario-main/usuario-card/usuario-card.component';
import { UsuarioFormComponent } from './Components/Usuario/usuario-main/usuario-form/usuario-form.component';
import { ProductoMainComponent } from './Components/Producto/producto-main/producto-main.component';
import { ProductoCardComponent } from './Components/Producto/producto-main/producto-card/producto-card.component';
import { ProductoFormComponent } from './Components/Producto/producto-main/producto-form/producto-form.component';
import { UsuarioCarrritoMainComponent } from './Components/usuario-carrrito-main/usuario-carrrito-main.component';
import { CabeceraPedidoFormComponent } from './Components/Pedido/cabecera-pedido-form/cabecera-pedido-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'usuarios', component: UsuarioMainComponent},
  {path: 'usuarios/:id', component: UsuarioCardComponent},
  {path: 'usuario/form', component: UsuarioFormComponent},
  {path: 'usuario/form/:id', component: UsuarioFormComponent},
  {path: 'productos', component: ProductoMainComponent},
  {path: 'productos/:id', component: ProductoCardComponent},
  {path: 'producto/form', component: ProductoFormComponent},
  {path: 'producto/form/:id', component: ProductoFormComponent},
  {path: 'cabecera', component: CabeceraPedidoFormComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
