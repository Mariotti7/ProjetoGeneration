import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {

  key: 'data'
  reverse = true
  faInfo = faInfo

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario
  emailUsuario: string

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    let token = environment.token

    if(token == ''){
      this.router.navigate(['/login'])
      this.alert.showAlertDanger('Faça login para ter acesso a plataforma')
    }
    
    window.scroll(0,0)
    this.findUsuarioByEmail()
    this.findAllCategorias()
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

  findUsuarioByEmail(){
    this.usuarioService.getUsuarioByEmail().subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    this.produto.criador = this.usuario

    if(this.produto.nome == null || this.produto.descricao == null || this.produto.link == null || this.produto.categoria == null){
      alert('Preencha todos os campos corretamente antes de publicar!')
    } else{
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.alert.showAlertSuccess('Curso cadastrado com sucesso!')
        this.router.navigate(['/conteudo'])
      })
    }
  }
}
