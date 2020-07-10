import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContabilidadeComponent } from './contabilidade.component';


const routes: Routes = [{
  path: '',
  component: ContabilidadeComponent,
  children: [
    {
      path: 'documentos',
      loadChildren: () => import('./documentos/documentos.module')
        .then(m => m.DocumentosModule),
    },
    {
      path: 'falar-contabilidade',
      loadChildren: () => import('./falar-contabilidade/falar-contabilidade.module')
        .then(m => m.FalarContabilidadeModule),
    },
  
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadeRoutingModule { }
