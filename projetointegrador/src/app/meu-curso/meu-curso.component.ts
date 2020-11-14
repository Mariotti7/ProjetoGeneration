import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
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
    private router: Router
  ) { 
  }

  ngOnInit() {
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
    if (this.id == null){
      alert('Selecione um curso para editar!')
    } else {
      this.router.navigate(['/editar-curso', this.id])
    }
  }
  deletar(){
    if (this.id == null){
      alert('Selecione um curso para deletar!')
    } else {
      this.router.navigate(['/deletar-curso', this.id])
    }
  }
}
