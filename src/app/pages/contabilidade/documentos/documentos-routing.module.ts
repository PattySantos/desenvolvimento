import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentosComponent } from './documentos.component';




const documentosRoutes: Routes = [
  { path: '',
          children: [
               { path :'' , component: DocumentosComponent  }
             
          ]      
    }
];


@NgModule({
  imports: [RouterModule.forChild(documentosRoutes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
