"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
class Pedidos {
    numero;
    data;
    cliente;
    itemsPedidos;
    status;
    constructor(numero, data, cliente, itemsPedidos, status) {
        this.numero = numero;
        this.data = data;
        this.cliente = cliente;
        this.itemsPedidos = itemsPedidos;
        this.status = status;
    }
    adicionarItem(item) {
        this.itemsPedidos.push(item);
    }
    calcularValorTotal() {
        let total = 0;
        this.itemsPedidos.forEach(item => {
            total += item.calcularTotalItem();
        });
        return total;
    }
    alterarStatus(status) {
        this.status = status;
    }
    removerItem(idItem) {
        return this.itemsPedidos.filter(item => item.idItem !== idItem);
    }
}
exports.Pedidos = Pedidos;
//# sourceMappingURL=pedidos.js.map