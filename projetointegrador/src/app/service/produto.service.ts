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
    return this.http.get('http://localhost:8080/produto', this.token)
  }

  postProduto(produto: Produto){
    return this.http.post('http://localhost:8080/produto', produto, this.token)
  }

  getAllProdutoByCategoria(id:number){
    return this.http.get(`http://localhost:8080/produto/categoria/${id}`, this.token)
  }
  getByIdProduto(id: number){
    return this.http.get(`http://localhost:8080/produto/${id}`, this.token)
  }

  getAllProdutoByUsuario(id:number){
    return this.http.get(`http://localhost:8080/produto/usuario/${id}`, this.token)
  }

  putProduto(produto: Produto){
    return this.http.put('http://localhost:8080/produto', produto, this.token)
  }

  deleteProduto(id:number){
    return this.http.delete(`http://localhost:8080/produto/${id}`,  this.token)
  }
}