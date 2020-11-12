import { SafeResourceUrl } from '@angular/platform-browser';
import { Categoria } from './Categoria';
import { Usuario } from './Usuario';

export class Produto {
    public id: number;
    public nome: string;
    public descricao: string;
    public link: string;
    public categoria: Categoria;
    public criador: Usuario;
    public urlSafe: SafeResourceUrl
}