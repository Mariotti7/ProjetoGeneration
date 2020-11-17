import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('https://donate-skills.herokuapp.com/usuario/logar', userLogin)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('https://donate-skills.herokuapp.com/usuario/cadastrar', usuario)
  }

  btnSair(){
    let ok = false
    let token = environment.token

    if(token != ''){
      ok = true
    }

    return ok
  }

  btnLogin(){
    let ok = false
    let token = environment.token

    if(token == ''){
      ok = true
    }

    return ok
  }
}