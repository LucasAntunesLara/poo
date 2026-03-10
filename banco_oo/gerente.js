"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Gerente = /** @class */ (function () {
    function Gerente(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Gerente.prototype.aumentarSalarioTaxaFixa = function () {
        this.salario += this.salario * 0.1;
        console.log('Seu salário foi incrementado em 10%');
    };
    Gerente.prototype.aumentarSalarioTaxaVariavel = function (taxa) {
        this.salario += this.salario * taxa;
        console.log("Seu sal\u00E1rio foi incrementado em ".concat(taxa * 100, "%"));
    };
    return Gerente;
}());
exports.Gerente = Gerente;
var gerente1 = new Gerente('Gerente 1', 1000);
console.log(gerente1);
gerente1.aumentarSalarioTaxaFixa();
console.log(gerente1);
gerente1.aumentarSalarioTaxaVariavel(0.1);
console.log(gerente1);
