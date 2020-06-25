import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbCardModule } from '@nebular/theme';

import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthModule {
}