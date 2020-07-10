import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MargemContribuicaoDetailComponent } from './margem-contribuicao-detail.component';
import { MargemContribuicaoListComponent } from './margem-contribuicao-list.component';



const margemRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: MargemContribuicaoListComponent  },
               { path :':id' , component: MargemContribuicaoDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(margemRoutes)],
  exports: [RouterModule]
})
export class MargemContribuicaoRoutingModule { }
