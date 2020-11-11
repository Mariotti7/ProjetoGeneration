import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  criadorCurso: string
  nomeCurso: string
  categoriaCurso:string
  descricaoCurso: string
  linkCurso: string

  constructor() { }

  ngOnInit(): void {
    this.categoriaCurso = localStorage.getItem('categoriaCurso')
    this.criadorCurso = localStorage.getItem('criadorCurso')
    this.descricaoCurso = localStorage.getItem('descricaoCurso')
    this.nomeCurso = localStorage.getItem('nomeCurso')
    this.linkCurso = localStorage.getItem('linkCurso')
  }

}
