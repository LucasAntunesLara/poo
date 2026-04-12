"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const agencia_1 = require("./agencia");
class Conta {
    _numero;
    getNumero() {
        return this._numero;
    }
    _saldo;
    get saldo() {
        return this._saldo;
    }
    set saldo(value) {
        this._saldo = value;
    }
    _limite;
    get limite() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
    _agencia;
    get agencia() {
        return this._agencia;
    }
    constructor(numero, saldo, agencia) {
        this._numero = numero;
        this._saldo = saldo;
        this._limite = 100;
        this._agencia = agencia;
    }
    consultarSaldo() {
        console.log(`**Saldo atual da conta ${this._numero}: ${this._saldo} **`);
    }
    depositar(valor) {
        if (this._saldo + valor > this.limite) {
            console.log('Limite excedido. Por favor tente com uma quantia menor.');
            return;
        }
        this._saldo += valor;
        console.log(`R$${valor} foi depositado na conta ${this._numero}`);
        this.consultarSaldo();
    }
    sacar(valor) {
        if (this._saldo - valor > 0) {
            this._saldo -= valor;
            console.log(`R$${valor} foi sacado da conta ${this._numero}`);
            this.consultarSaldo();
        }
    }
    imprimirExtrato() {
        console.log(`**Numero da conta: ${this._numero}**`);
        console.log(`**Agência da conta: ${this._agencia.numero}**`);
        this.consultarSaldo();
        console.log(`**Limite: ${this.limite}**`);
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
const conta1 = new Conta(1, 20, new agencia_1.Agencia(1));
const conta2 = new Conta(2, 40, new agencia_1.Agencia(2));
console.log(conta1);
console.log(conta2);
const conta3 = new Conta(3, 200, new agencia_1.Agencia(3));
console.log('\nNova conta criada com sucesso!');
console.log('Número:', conta3.getNumero());
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
//# sourceMappingURL=conta.js.map