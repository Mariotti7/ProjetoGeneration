import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';




@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  nome: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService
  ) { }
  
  ngOnInit(){
  window.scroll(0,0)
  this.nome.nome = localStorage.getItem('nome')
  }

  findName(){
    this.auth.logar(this.nome).subscribe((resp: UsuarioLogin)=>{
      this.nome = resp
      localStorage.setItem('nome', this.nome.nome)
    })
  }
  
}
