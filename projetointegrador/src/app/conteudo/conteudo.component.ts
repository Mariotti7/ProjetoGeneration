import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  listaProdutos2: Produto[]
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllCategorias()
    this.findAllProdutosByCategoria()
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  findAllProdutosByCategoria(){
    this.produtoService.getAllProdutoByCategoria(this.categoria.id).subscribe((resp: Produto[]) => {
      this.listaProdutos
    })
  }

  findByIdProduto(){
    this.findAllProdutosByCategoria()
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }
}
