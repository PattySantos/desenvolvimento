import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasReceberDetailComponent } from './contas-receber-detail.component';
import { ContasReceberListComponent } from './contas-receber-list.component';



const crmRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: ContasReceberListComponent  },
               { path :':id' , component: ContasReceberDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(crmRoutes)],
  exports: [RouterModule]
})
export class ContasReceberRoutingModule { }
