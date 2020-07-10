import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoas.component';


const routes: Routes = [{
  path: '',
  component: PessoasComponent,
  children: [
    {
      path: 'folha-pagamento',
      loadChildren: () => import('./folha-pagamento/folha-pagamento.module')
        .then(m => m.FolhaPagamentoModule),
    },
    {
      path: 'recrutamento',
      loadChildren: () => import('./recrutamento/recrutamento.module')
        .then(m => m.RecrutamentoModule),
    },
    {
      path: 'automacao-ponto',
      loadChildren: () => import('./automacao-ponto/automacao-ponto.module')
        .then(m => m.AutomacaoPontoModule),
    },
    {
      path: 'banco-curriculo',
      loadChildren: () => import('./banco-curriculo/banco-curriculo.module')
        .then(m => m.BancoCurriculoModule),
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
export class PessoasRoutingModule { }
