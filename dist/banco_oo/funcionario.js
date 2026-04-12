"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
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
    aumentarSalario(aumento) {
        this._salario += aumento;
    }
    consultarDados() {
        console.log(`Nome: ${this._nome}`);
        console.log(`Salário: ${this._salario}`);
    }
}
exports.Funcionario = Funcionario;
const funcionario1 = new Funcionario('Alan Patrick', 1000);
const funcionario2 = new Funcionario('Borré', 900);
funcionario1.consultarDados();
console.log('\n');
funcionario1.aumentarSalario(100);
funcionario2.aumentarSalario(500);
funcionario2.consultarDados();
//# sourceMappingURL=funcionario.js.map