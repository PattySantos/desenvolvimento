import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasPagarRoutingModule } from './contas-pagar-routing.module';
import { ContasPagarDetailComponent } from './contas-pagar-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule, NbTreeGridModule } from '@nebular/theme';
import { ContasPagarListComponent } from './contas-pagar-list.component';


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
    NbTreeGridModule,
    NbSelectModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    ContasPagarRoutingModule
  ],
  declarations: [
    ContasPagarDetailComponent, 
    ContasPagarListComponent
  ],
})
export class ContasPagarModule { }
