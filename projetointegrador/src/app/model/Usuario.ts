import { Produto } from './Produto';

export class Usuario {
    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public cursoCriado: Produto[]
}