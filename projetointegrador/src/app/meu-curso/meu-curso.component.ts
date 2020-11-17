import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-meu-curso',
  templateUrl: './meu-curso.component.html',
  styleUrls: ['./meu-curso.component.css']
})
export class MeuCursoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  idProduto:number
  id: number

  usuario: Usuario = new Usuario()

  constructor(
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertasService
  ) { 
  }

  ngOnInit() {
    let token = environment.token

    if(token == ''){
      this.router.navigate(['/login'])
      this.alert.showAlertDanger('Faça login para ter acesso a plataforma')
    }

    window.scroll(0,0)
    this.id = this.route.snapshot.params['id']
    this.findProdutosByIdUsuario()
  }

  findProdutosByIdUsuario(){
    this.produtoService.getAllProdutoByUsuario(this.id).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }
  findByIdProduto(){
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.id = this.produto.id
    })
  }
  editar(){
    if (this.idProduto == null){
      this.alert.showAlertDanger('Selecione um curso para editar!')
    } else {
      this.router.navigate(['/editar-curso', this.id])
    }
  }
  deletar(){
    if (this.idProduto == null){
      this.alert.showAlertDanger('Selecione um curso para deletar!')
    } else {
      this.router.navigate(['/deletar-curso', this.id])
    }
  }
}
