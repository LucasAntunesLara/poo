"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var uuid_1 = require("uuid");
/*
 * Public - acesso total (não recomendado)
 * Private - acesso somente dentro da própria classe
 * Protected - acesso somente dentro da própria classe e das classes derivadas (herança)
 */
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, email, endereco) {
        this._id = (0, uuid_1.v4)();
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
        this._endereco = endereco;
    }
    Object.defineProperty(Cliente.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (value) {
            this._endereco = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.Cliente = Cliente;
