import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { AltaComponent } from './componentes/alta/alta.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImgPipe } from './pipes/img.pipe';



@NgModule({
  declarations: [
    DetalleComponent,
    AltaComponent,
    ListadoComponent,
    BusquedaComponent,
    HomeComponent,
    ModalComponent,
    ImgPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HeroesModule { }
