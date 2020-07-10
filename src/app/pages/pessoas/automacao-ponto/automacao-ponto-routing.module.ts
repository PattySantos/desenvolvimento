import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomacaoPontoComponent} from './automacao-ponto.component';




const automacaoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: AutomacaoPontoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(automacaoRoutes)],
  exports: [RouterModule]
})
export class AutomacaoPontoRoutingModule { }
