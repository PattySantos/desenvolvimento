import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleInadimplenciaRoutingModule } from './controle-inadimplencia-routing.module';
import { ControleInadimplenciaComponent } from './controle-inadimplencia.component';
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
    ControleInadimplenciaRoutingModule
  ],
  declarations: [
    ControleInadimplenciaComponent
    
  ],
})
export class ControleInadimplenciaModule { }
