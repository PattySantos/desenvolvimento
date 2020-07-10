import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoCurriculoRoutingModule } from './banco-curriculo-routing.module';
import { BancoCurriculoComponent } from './banco-curriculo.component';
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
    BancoCurriculoRoutingModule
  ],
  declarations: [
    BancoCurriculoComponent
    
  ],
})
export class BancoCurriculoModule { }
