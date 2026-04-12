"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agencia = void 0;
class Agencia {
    _numero;
    get numero() {
        return this._numero;
    }
    constructor(numero) {
        this._numero = numero;
    }
}
exports.Agencia = Agencia;
const agencia = new Agencia(1);
const agencia2 = new Agencia(2);
console.log(agencia);
console.log(agencia2);
//# sourceMappingURL=agencia.js.map