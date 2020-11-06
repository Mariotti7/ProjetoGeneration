import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario: Usuario = new Usuario();
  senha: string;

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  
  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    
    if(this.senha===this.usuario.senha && this.usuario.nome.length >= 3 && this.usuario.nome.length <= 100 && this.usuario.email.length >= 3 && this.usuario.email.length <= 100){
      this.authservice.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert("Cadastro efetuado com sucesso!")
      }) 
    } else {
      if(this.senha != this.usuario.senha){
        alert("As senhas digitadas precisam ser iguais")
      }
      if(this.usuario.nome.length < 3 || this.usuario.nome.length >99){
        alert('O nome precisa ter entre 3 e 100 caracteres')
      }
      if(this.usuario.email.length < 3 || this.usuario.email.length >99){
        alert('O email precisa ter entre 3 e 100 caracteres')
      }
    }
  }
}