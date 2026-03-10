"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var agencia_1 = require("./agencia");
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, agencia) {
        this.numero = numero;
        this.saldo = saldo;
        this.limite = 100;
        this.agencia = agencia;
    }
    Conta.prototype.consultarSaldo = function () {
        console.log("**Saldo atual da conta ".concat(this.numero, ": ").concat(this.saldo, " **"));
    };
    Conta.prototype.depositar = function (valor) {
        if (this.saldo + valor > this.limite) {
            console.log('Limite excedido. Por favor tente com uma quantia menor.');
            return;
        }
        this.saldo += valor;
        console.log("R$".concat(valor, " foi depositado na conta ").concat(this.numero));
        this.consultarSaldo();
    };
    Conta.prototype.sacar = function (valor) {
        this.saldo -= valor;
        console.log("R$".concat(valor, " foi sacado da conta ").concat(this.numero));
        this.consultarSaldo();
    };
    Conta.prototype.imprimirExtrato = function () {
        console.log("**Numero da conta: ".concat(this.numero, "**"));
        console.log("**Ag\u00EAncia da conta: ".concat(this.agencia.numero, "**"));
        this.consultarSaldo();
        console.log("**Limite: ".concat(this.limite, "**"));
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
exports.Conta = Conta;
var conta1 = new Conta(1, 20, new agencia_1.Agencia(1));
var conta2 = new Conta(2, 40, new agencia_1.Agencia(2));
console.log(conta1);
console.log(conta2);
var conta3 = new Conta(3, 200, new agencia_1.Agencia(3));
console.log('\nNova conta criada com sucesso!');
console.log('Número:', conta3.numero);
console.log('Saldo:', conta3.saldo);
console.log('Limite:', conta3.limite);
console.log('\n');
conta1.imprimirExtrato();
console.log('\n');
conta1.depositar(20);
console.log('\n');
conta1.sacar(10);
conta1.transferir(conta2, 10);
console.log('\n');
conta1.consultarSaldo();
conta2.consultarSaldo();
