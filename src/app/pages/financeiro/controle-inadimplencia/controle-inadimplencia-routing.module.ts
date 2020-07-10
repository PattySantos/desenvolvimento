import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleInadimplenciaComponent } from './controle-inadimplencia.component';




const controleRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: ControleInadimplenciaComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(controleRoutes)],
  exports: [RouterModule]
})
export class ControleInadimplenciaRoutingModule { }
