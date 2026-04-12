import { Usuario } from './usuario';
export declare class SistemaLogin {
    private usuarios;
    criarUsuario(nome: string, email: string, senha: string, nivelAcesso?: 1 | 2): void;
    login(email: string, senha: string): void;
    recuperarSenha(email: string): void;
    acessarUsuarioPeloEmail(email: string): Usuario | null;
}
//# sourceMappingURL=sistemaLogin.d.ts.map