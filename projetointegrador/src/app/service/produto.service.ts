import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  //autorização para fazer o CRUD via token
  token ={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProduto(){
    return this.http.get('http://localhost:8082/produto', this.token)
  }

}
