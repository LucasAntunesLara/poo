"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
var Pedidos = /** @class */ (function () {
    function Pedidos(cliente) {
        this._numero = Math.floor(Math.random() * (1000 - 100) + 100);
        this._data = new Date().getDate().toString();
        this._cliente = cliente;
        this._itemsPedidos = [];
        this._status = 'Pendente';
    }
    Object.defineProperty(Pedidos.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedidos.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedidos.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (value) {
            this._cliente = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedidos.prototype, "itemsPedidos", {
        get: function () {
            return this._itemsPedidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedidos.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
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
        this._status = status;
    };
    Pedidos.prototype.removerItem = function (idItem) {
        return this.itemsPedidos.filter(function (item) { return item.idItem !== idItem; });
    };
    return Pedidos;
}());
exports.Pedidos = Pedidos;
