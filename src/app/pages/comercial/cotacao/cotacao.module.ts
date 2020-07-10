import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotacaoRoutingModule } from './cotacao-routing.module';
import { CotacaoDetailComponent } from './cotacao-detail.component';
import { CotacaoListComponent } from './cotacao-list.component';


@NgModule({
  declarations: [
     CotacaoListComponent,
     CotacaoDetailComponent],
  imports: [
    CommonModule,
    CotacaoRoutingModule
  ]
})
export class CotacaoModule { }
