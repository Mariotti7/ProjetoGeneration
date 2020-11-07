import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModelo } from '../model/UsuarioModelo';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin:UsuarioLogin){
    return this.http.post('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(usuario: UsuarioModelo){
    return this.http.post('http://localhost:9001/usuario/cadastrar', usuario)
  }
}
