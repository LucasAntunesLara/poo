export declare class Usuario {
    private _nome;
    private _email;
    private _senha;
    get nome(): string;
    constructor(nome: string, email: string, senha: string);
    set nome(nome: string);
    get email(): string;
    set email(email: string);
    validarEmail(email: string): boolean;
    get senha(): string;
    set senha(senha: string);
    recuperarSenha(email: string): void;
    verificarLogin(email: string, senha: string): boolean;
}
//# sourceMappingURL=usuario.d.ts.map