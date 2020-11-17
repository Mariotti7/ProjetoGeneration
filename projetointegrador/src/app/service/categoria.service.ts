import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(){
    return this.http.get('https://donate-skills.herokuapp.com/categoria', this.token)
  }

  getByIdCategoria(id: number){
    return this.http.get(`https://donate-skills.herokuapp.com/categoria/${id}`, this.token)
  }

  postCategoria(categoria: Categoria){
    return this.http.post('https://donate-skills.herokuapp.com/categoria', categoria, this.token)
  }
}
