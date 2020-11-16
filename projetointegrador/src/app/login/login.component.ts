import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {

	window.scroll(0,0)
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('nome', this.userLogin.nome)
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('email', this.userLogin.email)
      this.router.navigate(['/acesso'])
    }, erro => {
      if(erro.status == '500'){
        this.alert.showAlertDanger('Email e senha inválidos')
      }
    })
  }
}