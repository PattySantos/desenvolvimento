import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceiroComponent } from './financeiro.component';


const routes: Routes = [{
  path: '',
  component: FinanceiroComponent,
  children: [
    {
      path: 'contas-pagar',
      loadChildren: () => import('./contas-pagar/contas-pagar.module')
        .then(m => m.ContasPagarModule),
    },
    {
      path: 'contas-receber',
      loadChildren: () => import('./contas-receber/contas-receber.module')
        .then(m => m.ContasReceberModule),
    },
    {
      path: 'fluxo-caixa',
      loadChildren: () => import('./fluxo-caixa/fluxo-caixa.module')
        .then(m => m.FluxoCaixaModule),
    },

    {
      path: 'ciclo-financeiro',
      loadChildren: () => import('./ciclo-financeiro/ciclo-financeiro.module')
        .then(m => m.CicloFinanceiroModule),
    },

    {
      path: 'margem-contribuicao',
      loadChildren: () => import('./margem-contribuicao/margem-contribuicao.module')
        .then(m => m.MargemContribuicaoModule),
    },

    {
      path: 'controle-inadimplencia',
      loadChildren: () => import('./controle-inadimplencia/controle-inadimplencia.module')
        .then(m => m.ControleInadimplenciaModule),
    },
    {
      path: 'ponto-equilibrio',
      loadChildren: () => import('./ponto-equilibrio/ponto-equilibrio.module')
        .then(m => m.PontoEquilibrioModule),
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
export class FinanceiroRoutingModule { }
