"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
class ItemPedido {
    idItem;
    descricao;
    quantidade;
    valorUnitario;
    constructor(idItem, descricao, quantidade, valorUnitario) {
        this.idItem = idItem;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
    calcularTotalItem() {
        return this.quantidade * this.valorUnitario;
    }
}
exports.ItemPedido = ItemPedido;
//# sourceMappingURL=itemPedidos.js.map