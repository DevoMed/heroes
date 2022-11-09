import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { EdicionComponent } from './edicion/edicion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    EdicionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class UsuariosModule { }
