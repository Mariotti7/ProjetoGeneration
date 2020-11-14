import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModelo } from '../model/UsuarioModelo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  //Método de requisição para logar
  logar(usuarioLogin: UsuarioLogin){
    return this.http.post('http://localhost:8082/usuario/logar', usuarioLogin)
  }

  //Método de requisição para cadastrar
  cadastrar(user:UsuarioModelo){
    return this.http.post('http://localhost:8082/usuario/cadastrar', user)
  }

  //METODOS QUE MOSTRAM QUANDO VOCE ESTA LOGADO E QUANDO NAO ESTÁ
  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token !=null){
      ok = true
    }
    return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
      ok = true
    }
    return ok
  }

  

}
