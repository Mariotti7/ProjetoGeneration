import { CategoriaModelo } from './CategoriaModelo'
import { UsuarioModelo } from './UsuarioModelo'

export class ProdutoModelo{
    public id_produto: number
    public nome_curso: string
    public descricao: string
    public categoria: CategoriaModelo[]
    public cursoCriado: UsuarioModelo[]
}