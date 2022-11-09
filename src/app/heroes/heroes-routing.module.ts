import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltaComponent } from './componentes/alta/alta.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { AuthGuard } from '../shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'buscar',
        component: BusquedaComponent
      },
      {
        path: 'alta',
        component: AltaComponent
      },
      {
        path: 'editar/:id',
        component: AltaComponent
      },
      {
        path: ':id',
        component: DetalleComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
