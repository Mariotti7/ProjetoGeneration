import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-deletar-curso',
  templateUrl: './deletar-curso.component.html',
  styleUrls: ['./deletar-curso.component.css']
})
export class DeletarCursoComponent implements OnInit {

  id: number
  produto: Produto = new Produto()
  constructor(
    private produtoService: ProdutoService,
    private route:ActivatedRoute,
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
    this.id = this.route.snapshot.params["id"]
    this.findByIdProduto(this.id)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
  btnSim(){
    this.produtoService.deleteProduto(this.produto.id).subscribe(() =>{
      this.router.navigate(['/acesso'])
      this.alert.showAlertSuccess('Curso deletado com sucesso!')
    })
  }
  btnNao(){
   this.router.navigate(['/acesso'])
  }

}
