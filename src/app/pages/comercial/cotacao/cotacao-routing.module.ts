import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotacaoListComponent } from './cotacao-list.component';
import { CotacaoDetailComponent } from './cotacao-detail.component';


const cotacaoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: CotacaoListComponent  },
               { path :':id' , component: CotacaoDetailComponent }
          ]      
    }
];

@NgModule({
  imports: [RouterModule.forChild(cotacaoRoutes)],
  exports: [RouterModule]
})
export class CotacaoRoutingModule { }
