"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    _id;
    get id() {
        return this._id;
    }
    _nome;
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    constructor(nome) {
        this._id = Math.floor(Math.random() * (100 - 0) + 0);
        this._nome = nome;
    }
}
exports.Cliente = Cliente;
const cliente1 = new Cliente('Nome 1');
const cliente2 = new Cliente('Nome 2');
console.log(cliente1);
console.log(cliente2);
//# sourceMappingURL=cliente.js.map