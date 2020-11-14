import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { CursoComponent } from './curso/curso.component';
import { MeuCursoComponent } from './meu-curso/meu-curso.component';
import { EscolherCursoComponent } from './escolher-curso/escolher-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'acesso', component: AcessoComponent},
  { path: 'conteudo', component: ConteudoComponent},
  { path: 'publicacao', component: PublicacaoComponent},
  {path: 'curso/:id', component: CursoComponent},
  {path: 'meu-curso/:id', component: MeuCursoComponent},
  {path: 'escolher-curso/:id', component: EscolherCursoComponent},
  {path: 'editar-curso/:id', component: EditarCursoComponent},
  {path: 'deletar-curso/:id', component: DeletarCursoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
