"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoDeCredito = void 0;
class CartaoDeCredito {
    _numero;
    get numero() {
        return this._numero;
    }
    _cliente;
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    _dataValidade;
    get dataValidade() {
        return this._dataValidade;
    }
    set dataValidade(value) {
        this._dataValidade = value;
    }
    constructor(numero, dataValidade, cliente) {
        this._numero = numero;
        this._dataValidade = dataValidade;
        this._cliente = cliente;
    }
}
exports.CartaoDeCredito = CartaoDeCredito;
// let cartaoDeCredito = new CartaoDeCredito(
//   1234,
//   new Date(),
//   new Cliente(1, 'Cliente 1'),
// )
// let cartaoDeCredito1 = new CartaoDeCredito(
//   1235,
//   new Date(),
//   new Cliente(2, 'Cliente 2'),
// )
// console.log(cartaoDeCredito)
// console.log(cartaoDeCredito1)
//# sourceMappingURL=cartaoDeCretido.js.map