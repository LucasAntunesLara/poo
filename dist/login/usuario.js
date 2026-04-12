"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    _nome;
    _email;
    _senha;
    get nome() {
        return this._nome;
    }
    constructor(nome, email, senha) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        if (this.validarEmail(email))
            this._email = email;
        else
            console.log('Este não é um email válido.');
    }
    validarEmail(email) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(email);
    }
    get senha() {
        return this._senha;
    }
    set senha(senha) {
        this._senha = senha;
    }
    recuperarSenha(email) {
        console.log(`🔗 Link de recuperação de senha enviado para ${this.email}.`);
    }
    verificarLogin(email, senha) {
        return this.validarEmail(email) &&
            typeof senha === 'string' &&
            senha === this._senha &&
            senha &&
            email
            ? true
            : false;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map