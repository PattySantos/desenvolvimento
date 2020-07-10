import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
   
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
  
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'cadastros',
      loadChildren: () => import('./cadastros/cadastros.module')
        .then(m => m.CadastrosModule),
    },
    {
      path: 'comercial',
      loadChildren: () => import('./comercial/comercial.module')
        .then(m => m.ComercialModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
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
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
