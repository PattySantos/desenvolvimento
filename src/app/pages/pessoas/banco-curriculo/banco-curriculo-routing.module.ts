import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoCurriculoComponent} from './banco-curriculo.component';




const bancoRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: BancoCurriculoComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(bancoRoutes)],
  exports: [RouterModule]
})
export class BancoCurriculoRoutingModule { }
