import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';



const routes: Routes = [{
  path: '',
  component: CadastrosComponent,
  children: [
   
    {
      path: 'clientes',
      loadChildren: () => import('./clientes/clientes.module')
        .then(m => m.ClientesModule),
    },
    {
      path: 'fornecedores',
      loadChildren: () => import('./fornecedores/fornecedores.module')
        .then(m => m.FornecedoresModule),
    },
    {
      path: 'produtos',
      loadChildren: () => import('./produtos/produtos.module')
        .then(m => m.ProdutosModule),
    },
    {
      path: 'empresas',
      loadChildren: () => import('./empresas/empresas.module')
        .then(m => m.EmpresasModule),
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
export class CadastrosRoutingModule { }
