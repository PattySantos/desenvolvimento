import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultoriaComponent } from './consultoria.component';


const routes: Routes = [{
  path: '',
  component: ConsultoriaComponent,
  children: [
    {
      path: 'planejamento',
      loadChildren: () => import('./planejamento/planejamento.module')
        .then(m => m.PlanejamentoModule),
    },
    {
      path: 'mercado',
      loadChildren: () => import('./mercado/mercado.module')
        .then(m => m.MercadoModule),
    },
    {
      path: 'organizacao',
      loadChildren: () => import('./organizacao/organizacao.module')
        .then(m => m.OrganizacaoModule),
    },
    {
      path: 'financas',
      loadChildren: () => import('./financas/financas.module')
        .then(m => m.FinancasModule),
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
export class ConsultoriaRoutingModule { }
