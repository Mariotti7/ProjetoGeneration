import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModelo } from '../model/UsuarioModelo';
import { AuthService } from '../service/auth.service';
import { UserloginService } from '../service/userlogin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:UsuarioModelo = new UsuarioModelo()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)

  }

  conferirSenha(event:any){
    this.senha = event.target.value
  }

  cadastro(){
    if(this.user.senha === this.senha){
      this.authService.cadastrar(this.user).subscribe((resp: UsuarioModelo)=>{
        this.user = resp
        this.router.navigate(['/login'])
        alert('Cadastro Realizado Com Sucesso!  ')
      })
    }else{
      alert('Senhas Não Conferem')
    }
    
  }

}
