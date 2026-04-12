"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (value) {
            this._salario = value;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.aumentarSalario = function (aumento) {
        this._salario += aumento;
    };
    Funcionario.prototype.consultarDados = function () {
        console.log("Nome: ".concat(this._nome));
        console.log("Sal\u00E1rio: ".concat(this._salario));
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
