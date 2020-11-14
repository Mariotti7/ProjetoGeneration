import { Component, OnInit } from '@angular/core';
import { UsuarioModelo } from '../model/UsuarioModelo';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

}
