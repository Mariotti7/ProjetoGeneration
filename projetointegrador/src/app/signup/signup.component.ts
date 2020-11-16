import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.usuario.nome = ''
    this.usuario.email = ''
    this.usuario.senha = ''
  }
  
  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    
    if(this.senha===this.usuario.senha && this.usuario.nome.length >= 3 && this.usuario.nome.length <= 100 && this.usuario.email.length >= 3 && this.usuario.email.length <= 100){
      this.authservice.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess("Cadastro efetuado com sucesso!")
      }) 
    } else {
      this.alert.showAlertDanger('Preencha todos os campos corretamente para se registar!')
    }
  }
}