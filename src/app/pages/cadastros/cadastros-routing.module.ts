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
      loadChildren: () => import('./fornecedor/fornecedor.module')
        .then(m => m.FornecedorModule),
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
