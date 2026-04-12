export declare class Usuario {
    private _nome;
    private _email;
    private _senha;
    get nome(): string;
    constructor(nome: string, email: string, senha: string);
    set nome(nome: string);
    get email(): string;
    set email(email: string);
    private validarEmail;
    get senha(): string;
    set senha(senha: string);
    recuperarSenha(email: string): string;
    verificarLogin(email: string, senha: string): void;
}
//# sourceMappingURL=usuario.d.ts.map