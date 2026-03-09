"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
var ItemPedido = /** @class */ (function () {
    function ItemPedido(idItem, descricao, quantidade, valorUnitario) {
        this.idItem = idItem;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
    ItemPedido.prototype.calcularTotalItem = function () {
        return this.quantidade * this.valorUnitario;
    };
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;
