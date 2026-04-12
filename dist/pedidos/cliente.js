"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const uuid_1 = require("uuid");
/*
 * Public - acesso total (não recomendado)
 * Private - acesso somente dentro da própria classe
 * Protected - acesso somente dentro da própria classe e das classes derivadas (herança)
 */
class Cliente {
    _id;
    get id() {
        return this._id;
    }
    _nome;
    get nome() {
        return this._nome;
    }
    _cpf;
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    _endereco;
    get endereco() {
        return this._endereco;
    }
    set endereco(value) {
        this._endereco = value;
    }
    constructor(nome, cpf, email, endereco) {
        this._id = (0, uuid_1.v4)();
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
        this._endereco = endereco;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map