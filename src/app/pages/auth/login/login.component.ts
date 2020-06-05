/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  username:string
  password:string;
  loginError: boolean;
  cadastrando:boolean;
  
  constructor(
    private route: Router
  ){

  }
  onSubmit(){
   this.route.navigate(['/pages'])
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastrar(){
    this.cadastrando = false;
  }
}