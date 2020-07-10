import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluxoCaixaComponent } from './fluxo-caixa.component';




const fluxoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: FluxoCaixaComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(fluxoRoutes)],
  exports: [RouterModule]
})
export class FluxoCaixaRoutingModule { }
