import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComercialComponent } from './comercial.component';


const routes: Routes = [{
  path: '',
  component: ComercialComponent,
  children: [
    {
      path: 'crm',
      loadChildren: () => import('./crm/crm.module')
        .then(m => m.CrmModule),
    },
    {
      path: 'cotacao',
      loadChildren: () => import('./cotacao/cotacao.module')
        .then(m => m.CotacaoModule),
    },
    {
      path: 'ecommerce',
      loadChildren: () => import('./ecommerce/ecommerce.module')
        .then(m => m.EcommerceModule),
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
export class ComercialRoutingModule { }
