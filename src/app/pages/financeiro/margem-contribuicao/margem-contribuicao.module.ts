import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MargemContribuicaoRoutingModule } from './margem-contribuicao-routing.module';
import { MargemContribuicaoDetailComponent } from './margem-contribuicao-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule, NbTreeGridModule } from '@nebular/theme';
import { MargemContribuicaoListComponent } from './margem-contribuicao-list.component';


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
    MargemContribuicaoRoutingModule
  ],
  declarations: [
    MargemContribuicaoDetailComponent, 
    MargemContribuicaoListComponent
  ],
})
export class MargemContribuicaoModule { }
