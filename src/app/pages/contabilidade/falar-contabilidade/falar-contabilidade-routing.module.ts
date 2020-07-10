import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FalarContabilidadeComponent } from './falar-contabilidade.component';




const falarRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: FalarContabilidadeComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(falarRoutes)],
  exports: [RouterModule]
})
export class FalarContabilidadeRoutingModule { }
