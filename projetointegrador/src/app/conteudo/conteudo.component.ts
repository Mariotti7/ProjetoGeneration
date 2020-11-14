import { Component, OnInit } from '@angular/core';
import { CategoriaModelo } from '../model/CategoriaModelo';
import { ProdutoModelo } from '../model/ProdutoModelo';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  curso: ProdutoModelo = new ProdutoModelo()
  listaCurso: ProdutoModelo[]

  categoria: CategoriaModelo = new CategoriaModelo()
  listaCategoria: CategoriaModelo[]

  constructor(
    private cursoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    
    this.findAllCursos()
    this.findAllCategoria()
  }

  findAllCursos(){
    this.cursoService.getAllProduto().subscribe((resp: ProdutoModelo[])=>{
      this.listaCurso = resp
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModelo[])=>{
      this.listaCategoria = resp
    })
  }

}
