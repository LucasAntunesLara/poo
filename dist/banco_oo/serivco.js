"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
class Servico {
    _contratante;
    _responsavel;
    _dataDeContratacao;
    constructor(contratante, responsavel, dataDeContratacao) {
        this._contratante = contratante;
        this._responsavel = responsavel;
        this._dataDeContratacao = dataDeContratacao;
    }
    imprimir() {
        console.log('Nome do contratante: ' + this._contratante.nome);
        console.log(`Nome do responsável: ${this._responsavel.nome}`);
        console.log(`Data de contratação: ${this._dataDeContratacao}`);
    }
    get contratante() {
        return this._contratante;
    }
    set contratante(value) {
        this._contratante = value;
    }
    get responsavel() {
        return this._responsavel;
    }
    set responsavel(value) {
        this._responsavel = value;
    }
    get dataDeContratacao() {
        return this._dataDeContratacao;
    }
    set dataDeContratacao(value) {
        this._dataDeContratacao = value;
    }
}
exports.Servico = Servico;
//# sourceMappingURL=serivco.js.map