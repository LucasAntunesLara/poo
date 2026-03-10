"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoDeCredito = void 0;
var cliente_1 = require("./cliente");
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito(numero, dataValidade, cliente) {
        this.numero = numero;
        this.dataValidade = dataValidade;
        this.cliente = cliente;
    }
    return CartaoDeCredito;
}());
exports.CartaoDeCredito = CartaoDeCredito;
var cartaoDeCredito = new CartaoDeCredito(1234, new Date(), new cliente_1.Cliente(1, 'Cliente 1'));
var cartaoDeCredito1 = new CartaoDeCredito(1235, new Date(), new cliente_1.Cliente(2, 'Cliente 2'));
console.log(cartaoDeCredito);
console.log(cartaoDeCredito1);
