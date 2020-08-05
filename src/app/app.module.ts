import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './Services/usuario.service';
import { UsuarioMainComponent } from './Components/Usuario/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './Components/Usuario/usuario-main/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './Components/Usuario/usuario-main/usuario-form/usuario-form.component';
import { UsuarioCardComponent } from './Components/Usuario/usuario-main/usuario-card/usuario-card.component';
import { ProductoMainComponent } from './Components/Producto/producto-main/producto-main.component';
import { ProductoListComponent } from './Components/Producto/producto-main/producto-list/producto-list.component';
import { ProductoFormComponent } from './Components/Producto/producto-main/producto-form/producto-form.component';
import { ProductoCardComponent } from './Components/Producto/producto-main/producto-card/producto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioCardComponent,
    ProductoMainComponent,
    ProductoListComponent,
    ProductoFormComponent,
    ProductoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsuarioService,
    {
      provide: LOCALE_ID,
      useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
