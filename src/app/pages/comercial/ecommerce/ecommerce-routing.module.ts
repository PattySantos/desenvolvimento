import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceDetailComponent } from './ecommerce-detail.component';
import { EcommerceListComponent } from './ecommerce-list.component';



const ecommerceRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: EcommerceListComponent  },
               { path :':id' , component: EcommerceDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(ecommerceRoutes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
