import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecrutamentoComponent } from './recrutamento.component';




const recrutamentoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: RecrutamentoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(recrutamentoRoutes)],
  exports: [RouterModule]
})
export class RecrutamentoRoutingModule { }
