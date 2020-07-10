import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresDetailComponent } from './fornecedores-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule } from '@nebular/theme';
import { FornecedoresListComponent } from './fornecedores-list.component';


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
    FornecedoresRoutingModule
  ],
  declarations: [
    FornecedoresDetailComponent, 
    FornecedoresListComponent
  ],
})
export class FornecedoresModule { }
