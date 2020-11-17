import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  produto: Produto = new Produto()

  idProduto: number



  criadorCurso: string
  nomeCurso: string
  categoriaCurso: string
  descricaoCurso: string
  linkCurso: string

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
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
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
    this.produto=resp
    this.criadorCurso = this.produto.criador.nome
    this.nomeCurso = this.produto.nome
    this.categoriaCurso = this.produto.categoria.descricao
    this.descricaoCurso = this.produto.descricao
    if (this.produto.link.includes("https://youtu.be/")){
      this.linkCurso = this.produto.link.replace("https://youtu.be/", "https://www.youtube.com/embed/")
    } else {
      this.linkCurso = this.produto.link.replace("playlist?list=", "embed/videoseries?list=")
    }

    this.produto.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkCurso)
    })
  }
}
