"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguroDeVeiculo = void 0;
const serivco_1 = require("./serivco");
class SeguroDeVeiculo extends serivco_1.Servico {
    _veiculo;
    _valorDoSeguroDeVeiculo;
    _franquia;
    constructor(contratante, responsavel, dataDeContratacao, veiculo, valorDoSeguroDeVeiculo, franquia) {
        super(contratante, responsavel, dataDeContratacao);
        this._veiculo = veiculo;
        this._valorDoSeguroDeVeiculo = valorDoSeguroDeVeiculo;
        this._franquia = franquia;
    }
    imprimir() {
        super.imprimir();
        console.log(`Veículo: ${this._veiculo}`);
        console.log(`Valor do seguro de veículo: ${this._valorDoSeguroDeVeiculo}`);
        console.log(`Franquia: ${this._franquia}`);
    }
}
exports.SeguroDeVeiculo = SeguroDeVeiculo;
//# sourceMappingURL=seguroDeVeiculo.js.map