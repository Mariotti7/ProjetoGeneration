import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  faInfo = faInfo
  
  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
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
    this.findAllCategorias()
    this.idProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProduto)
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

  salvar(){
    if(this.produto.nome == null || this.produto.descricao == null || this.produto.link == null || this.produto.categoria == null){
      this.alert.showAlertDanger('Preencha todos os campos corretamente antes de salvar!')
    } else {
      this.categoria.id = this.idCategoria
      this.produto.categoria = this.categoria

      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.router.navigate(['/acesso'])
        this.alert.showAlertSuccess('Curso editado com sucesso!')
    })
    }  
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
}
