"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
var Pedidos = /** @class */ (function () {
    function Pedidos(numero, data, cliente, itemsPedidos, status) {
        this.numero = numero;
        this.data = data;
        this.cliente = cliente;
        this.itemsPedidos = itemsPedidos;
        this.status = status;
    }
    Pedidos.prototype.adicionarItem = function (item) {
        this.itemsPedidos.push(item);
    };
    Pedidos.prototype.calcularValorTotal = function () {
        var total = 0;
        this.itemsPedidos.forEach(function (item) {
            total += item.calcularTotalItem();
        });
        return total;
    };
    Pedidos.prototype.alterarStatus = function (status) {
        this.status = status;
    };
    Pedidos.prototype.removerItem = function (idItem) {
        return this.itemsPedidos.filter(function (item) { return item.idItem !== idItem; });
    };
    return Pedidos;
}());
exports.Pedidos = Pedidos;
