import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule} from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { AcessoComponent } from './acesso/acesso.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { CursoComponent } from './curso/curso.component';
import { MeuCursoComponent } from './meu-curso/meu-curso.component';
import { EscolherCursoComponent } from './escolher-curso/escolher-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { AlertasComponent } from './alertas/alertas.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AcessoComponent,
    PerfilLateralComponent,
    ConteudoComponent,
    PublicacaoComponent,
    CursoComponent,
    MeuCursoComponent,
    EscolherCursoComponent,
    EditarCursoComponent,
    DeletarCursoComponent,
    AlertasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
