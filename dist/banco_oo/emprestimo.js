"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
const serivco_1 = require("./serivco");
class Emprestimo extends serivco_1.Servico {
    _valor;
    _taxa;
    constructor(contratante, responsavel, dataDeContratacao, valor, taxa) {
        super(contratante, responsavel, dataDeContratacao);
        this._valor = valor;
        this._taxa = taxa;
    }
    imprimir() {
        //Recupera o que foi feito no método da super classe
        super.imprimir();
        console.log(`Veículo: ${this._taxa}`);
        console.log(`Valor: ${this._valor}`);
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get taxa() {
        return this._taxa;
    }
    set taxa(value) {
        this._taxa = value;
    }
}
exports.Emprestimo = Emprestimo;
//# sourceMappingURL=emprestimo.js.map