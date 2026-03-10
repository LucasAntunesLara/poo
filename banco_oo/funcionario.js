"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.aumentarSalario = function (aumento) {
        this.salario += aumento;
    };
    Funcionario.prototype.consultarDados = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Sal\u00E1rio: ".concat(this.salario));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var funcionario1 = new Funcionario('Alan Patrick', 1000);
var funcionario2 = new Funcionario('Borré', 900);
funcionario1.consultarDados();
console.log('\n');
funcionario1.aumentarSalario(100);
funcionario2.aumentarSalario(500);
funcionario2.consultarDados();
// console.log(funcionario1)
// console.log(funcionario2)
