import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedoresDetailComponent } from './fornecedores-detail.component';
import { FornecedoresListComponent } from './fornecedores-list.component';



const fornecedoresRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: FornecedoresListComponent  },
               { path :':id' , component: FornecedoresDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(fornecedoresRoutes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
