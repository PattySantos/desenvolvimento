import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecrutamentoRoutingModule } from './recrutamento-routing.module';
import { RecrutamentoComponent } from './recrutamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule, NbTreeGridModule } from '@nebular/theme';



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
    RecrutamentoRoutingModule
  ],
  declarations: [
    RecrutamentoComponent
    
  ],
})
export class RecrutamentoModule { }
