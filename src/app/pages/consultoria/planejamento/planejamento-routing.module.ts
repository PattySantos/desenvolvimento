import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanejamentoComponent } from './planejamento.component';




const planejamentoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: PlanejamentoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(planejamentoRoutes)],
  exports: [RouterModule]
})
export class PlanejamentoRoutingModule { }
