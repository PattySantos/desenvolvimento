import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloFinanceiroComponent } from './ciclo-financeiro.component';




const cicloRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: CicloFinanceiroComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(cicloRoutes)],
  exports: [RouterModule]
})
export class CicloFinanceiroRoutingModule { }
