import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getUsuarioByEmail(){
    
    return this.http.get(`http://localhost:8080/usuario/email/${localStorage.getItem('email')}`, this.token)
  }
}