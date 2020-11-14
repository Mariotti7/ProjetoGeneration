import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)
  }

  entrar(){
    this.auth.logar(this.userLogin).subscribe((resp: UsuarioLogin)=>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token) //local que vai armazenar o token, garante que o usuário está logado
      localStorage.setItem('nome', this.userLogin.nome)
      localStorage.setItem('email', this.userLogin.email)
      this.router.navigate(['/acesso'])
    })
  }

}
