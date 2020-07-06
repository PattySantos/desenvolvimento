import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesDetailComponent } from './clientes-detail.component';
import { ClientesListComponent } from './clientes-list.component';



const clientesRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: ClientesListComponent  },
               { path :':id' , component: ClientesDetailComponent }
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(clientesRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
