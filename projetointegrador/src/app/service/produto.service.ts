import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  getAllProduto(){
    return this.http.get('https://donate-skills.herokuapp.com/produto', this.token)
  }

  postProduto(produto: Produto){
    return this.http.post('https://donate-skills.herokuapp.com/produto', produto, this.token)
  }

  getAllProdutoByCategoria(id:number){
    return this.http.get(`https://donate-skills.herokuapp.com/produto/categoria/${id}`, this.token)
  }
  getByIdProduto(id: number){
    return this.http.get(`https://donate-skills.herokuapp.com/produto/${id}`, this.token)
  }

  getAllProdutoByUsuario(id:number){
    return this.http.get(`https://donate-skills.herokuapp.com/produto/usuario/${id}`, this.token)
  }

  putProduto(produto: Produto){
    return this.http.put('https://donate-skills.herokuapp.com/produto', produto, this.token)
  }

  deleteProduto(id:number){
    return this.http.delete(`https://donate-skills.herokuapp.com/produto/${id}`,  this.token)
  }
}