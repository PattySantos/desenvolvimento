import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresasDetailComponent } from './empresas-detail.component';
import { EmpresasListComponent } from './empresas-list.component';



const empresasRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: EmpresasListComponent  },
               { path :':id' , component: EmpresasDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(empresasRoutes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
