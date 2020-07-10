import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoEquilibrioComponent } from './ponto-equilibrio.component';




const pontoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: PontoEquilibrioComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(pontoRoutes)],
  exports: [RouterModule]
})
export class PontoEquilibrioRoutingModule { }
