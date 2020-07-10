import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmDetailComponent } from './crm-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbListModule, NbAccordionModule, NbUserModule, NbTreeGridModule } from '@nebular/theme';
import { CrmListComponent } from './crm-list.component';


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
    CrmRoutingModule
  ],
  declarations: [
    CrmDetailComponent, 
    CrmListComponent
  ],
})
export class CrmModule { }
