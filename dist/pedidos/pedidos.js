"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
class Pedidos {
    _numero;
    get numero() {
        return this._numero;
    }
    _data;
    get data() {
        return this._data;
    }
    _cliente;
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    _itemsPedidos;
    get itemsPedidos() {
        return this._itemsPedidos;
    }
    _status;
    get status() {
        return this._status;
    }
    constructor(cliente) {
        this._numero = this.gerarID(100, 1000);
        this._data = new Date().getDate().toString();
        this._cliente = cliente;
        this._itemsPedidos = [];
        this._status = 'Pendente';
    }
    gerarID(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
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
        this._status = status;
    }
    removerItem(idItem) {
        return this.itemsPedidos.filter(item => item.idItem !== idItem);
    }
}
exports.Pedidos = Pedidos;
//# sourceMappingURL=pedidos.js.map