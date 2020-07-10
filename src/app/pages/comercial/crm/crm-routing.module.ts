import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrmDetailComponent } from './crm-detail.component';
import { CrmListComponent } from './crm-list.component';



const crmRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: CrmListComponent  },
               { path :':id' , component: CrmDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(crmRoutes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
