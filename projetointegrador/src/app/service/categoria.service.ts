import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllTemas(){
    return this.http.get('http://localhost:9000/categoria', this.token)
  }

  getByIdTema(id: number){
    return this.http.get(`http://localhost:9000/categoria/${id}`, this.token)
  }

  postTema(categoria: Categoria){
    return this.http.post('http://localhost:9000/categoria', categoria, this.token)
  }
}
