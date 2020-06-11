
import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { Router } from '@angular/router';
import { Usuario }from './Usuario';
import { AuthService } from '../auth-service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  username:string
  password:string;
  loginError: boolean;
  cadastrando:boolean;
  mensagemSucesso:string;
  
  constructor(
    private route: Router,
    private authService: AuthService
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
  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
      this.authService.salvar(usuario)
      .subscribe( response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login. "
        this.loginError = false;

      }, error =>{
        this.loginError = true;
        this.mensagemSucesso =  null
      })
  }
}