import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolhaPagamentoComponent } from './folha-pagamento.component';




const folhaRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: FolhaPagamentoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(folhaRoutes)],
  exports: [RouterModule]
})
export class FolhaPagamentoRoutingModule { }
