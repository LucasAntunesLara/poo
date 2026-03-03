"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
class ItemPedido {
    idItem;
    descricao;
    quantidade;
    constructor(idItem, descricao, quantidade) {
        this.idItem = idItem;
        this.descricao = descricao;
        this.quantidade = quantidade;
    }
    calcularTotalItem() {
        return this.quantidade;
    }
}
exports.ItemPedido = ItemPedido;
//# sourceMappingURL=itemPedidos.js.map