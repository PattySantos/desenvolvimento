import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancasComponent } from './financas.component';




const financasRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: FinancasComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(financasRoutes)],
  exports: [RouterModule]
})
export class FinancasRoutingModule { }
