import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-feed',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  id:number
  usuario: Usuario = new Usuario()

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private alert: AlertasService
  ) { }

  ngOnInit(){

    let token = environment.token

    if(token == ''){
      this.router.navigate(['/login'])
      this.alert.showAlertDanger('Faça login para ter acesso a plataforma')
    }

    window.scroll(0, 0)
    this.findUsuarioByEmail()
  }

  meusCursos(){
      this.router.navigate(['/meu-curso', this.id])   
  }

  findUsuarioByEmail(){
    this.usuarioService.getUsuarioByEmail().subscribe((resp: Usuario) => {
      this.usuario = resp
      this.id = this.usuario.id
    })
  }
}