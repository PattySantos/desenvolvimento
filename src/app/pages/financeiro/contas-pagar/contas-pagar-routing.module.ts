import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasPagarDetailComponent } from './contas-pagar-detail.component';
import { ContasPagarListComponent } from './contas-pagar-list.component';



const crmRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: ContasPagarListComponent  },
               { path :':id' , component: ContasPagarDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(crmRoutes)],
  exports: [RouterModule]
})
export class ContasPagarRoutingModule { }
