import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasReceberRoutingModule } from './contas-receber-routing.module';
import { ContasReceberDetailComponent } from './contas-receber-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule, NbTreeGridModule } from '@nebular/theme';
import { ContasReceberListComponent } from './contas-receber-list.component';


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
    ContasReceberRoutingModule
  ],
  declarations: [
    ContasReceberDetailComponent, 
    ContasReceberListComponent
  ],
})
export class ContasReceberModule { }
