"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    _nome;
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    _salario;
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    constructor(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    aumentarSalarioTaxaFixa() {
        this.salario += this.salario * 0.1;
        console.log('Seu salário foi incrementado em 10%');
    }
    aumentarSalarioTaxaVariavel(taxa) {
        this.salario += this.salario * taxa;
        console.log(`Seu salário foi incrementado em ${taxa * 100}%`);
    }
}
exports.Gerente = Gerente;
const gerente1 = new Gerente('Gerente 1', 1000);
console.log(gerente1);
gerente1.aumentarSalarioTaxaFixa();
console.log(gerente1);
gerente1.aumentarSalarioTaxaVariavel(0.1);
console.log(gerente1);
//# sourceMappingURL=gerente.js.map