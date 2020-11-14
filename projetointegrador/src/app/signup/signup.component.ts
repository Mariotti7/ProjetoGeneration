import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModelo } from '../model/UsuarioModelo';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UsuarioModelo = new UsuarioModelo()
  senha: string //variável para guardar senha digitada pelo usuário

  //Injetando dependência de service para autenticação
  constructor(
    private auth: AuthService,
    private router: Router //Para que ao cadastrar e validar a senha, o usuário seja redirecionado(navigate) ao login
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  cadastrar(){
    if(this.user.senha === this.senha){
      this.auth.cadastrar(this.user).subscribe((resp: UsuarioModelo)=>{
        this.user = resp
        this.router.navigate(['/login'])
        alert('Cadastro realizado com sucesso!!')
      })
    }else{
      alert('Senhas não conferem')
    }
      
  }

  //O método vai receber um evento do tipo any(qualquer tipo de dado) 
  //que a variável senha vai receber o evento do input
  conferirSenha(event: any){
    this.senha = event.target.value
  }


}
