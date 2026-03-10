"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var cliente1 = new Cliente(1, 'Nome 1');
var cliente2 = new Cliente(2, 'Nome 2');
console.log(cliente1);
console.log(cliente2);
