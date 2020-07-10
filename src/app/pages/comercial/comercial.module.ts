import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { ComercialComponent } from './comercial.component';


@NgModule({
  declarations: [ComercialComponent],
  imports: [
    CommonModule,
    ComercialRoutingModule
  ]
})
export class ComercialModule { }
