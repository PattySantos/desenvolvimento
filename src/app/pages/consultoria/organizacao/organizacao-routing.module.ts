import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizacaoComponent } from './organizacao.component';




const organizacaoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: OrganizacaoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(organizacaoRoutes)],
  exports: [RouterModule]
})
export class OrganizacaoRoutingModule { }
