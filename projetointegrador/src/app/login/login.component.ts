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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)

  }
  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UsuarioLogin)=>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      this.router.navigate(['/acesso'])
    })
  }
}
