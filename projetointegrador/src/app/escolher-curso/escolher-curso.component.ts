import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-escolher-curso',
  templateUrl: './escolher-curso.component.html',
  styleUrls: ['./escolher-curso.component.css']
})
export class EscolherCursoComponent implements OnInit {

  id:number
  idCategoria: number
  idProduto: number
  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    let token = environment.token

    if(token == ''){
      this.router.navigate(['/login'])
      this.alert.showAlertDanger('Faça login para ter acesso a plataforma')
    }

    window.scroll(0,0)
    this.idCategoria = this.route.snapshot.params['id']
    this.findAllProdutosByIdCategoria()
  }

  findAllProdutosByIdCategoria(){
    this.produtoService.getAllProdutoByCategoria(this.idCategoria).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByIdProduto(){
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.id = this.produto.id
    })
  }
  assistir(){
    if (this.id == null){
      this.alert.showAlertDanger('Selecione um curso para assistir!')
    } else {
      this.router.navigate(['/curso', this.id])
    }
  }
}
