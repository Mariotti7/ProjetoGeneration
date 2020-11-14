import { ProdutoModelo } from './ProdutoModelo'

export class UsuarioModelo{
    public id_usuario: number
    public nome: string
    public email: string
    public senha: string
    public criadorCurso: ProdutoModelo[]
}