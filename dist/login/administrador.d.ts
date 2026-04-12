import { Usuario } from './usuario';
export declare class Administrador extends Usuario {
    private _nivelAcesso;
    constructor(nome: string, email: string, senha: string, nivelAcesso: 1 | 2);
    get nivelAcesso_1(): 1 | 2;
    set nivelAcesso_1(value: 1 | 2);
    recuperarSenha(email: string): void;
    private gerarTokenSeguro;
}
//# sourceMappingURL=administrador.d.ts.map