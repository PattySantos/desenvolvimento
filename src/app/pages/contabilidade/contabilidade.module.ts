import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContabilidadeRoutingModule } from './contabilidade-routing.module';
import { ContabilidadeComponent } from './contabilidade.component';


@NgModule({
  declarations: [ContabilidadeComponent ],
  imports: [
    CommonModule,
    ContabilidadeRoutingModule
  ]
})
export class ContabilidadeModule { }
