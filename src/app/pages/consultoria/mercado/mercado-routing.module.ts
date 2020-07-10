import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercadoComponent } from './mercado.component';




const mercadoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: MercadoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(mercadoRoutes)],
  exports: [RouterModule]
})
export class MercadoRoutingModule { }
