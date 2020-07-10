import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasDetailComponent } from './empresas-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule } from '@nebular/theme';
import { EmpresasListComponent } from './empresas-list.component';


@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    EmpresasRoutingModule
  ],
  declarations: [
    EmpresasDetailComponent, 
    EmpresasListComponent
  ],
})
export class EmpresasModule { }
