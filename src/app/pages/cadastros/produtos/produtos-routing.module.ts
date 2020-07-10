import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosDetailComponent } from './produtos-detail.component';
import { ProdutosListComponent } from './produtos-list.component';



const produtosRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: ProdutosListComponent  },
               { path :':id' , component: ProdutosDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(produtosRoutes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
