import { Agencia } from './agencia';
export declare class Conta {
    private _numero;
    getNumero(): number;
    private _saldo;
    get saldo(): number;
    set saldo(value: number);
    private _limite;
    get limite(): number;
    set limite(value: number);
    private _agencia;
    get agencia(): Agencia;
    constructor(numero: number, saldo: number, agencia: Agencia);
    consultarSaldo(): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    imprimirExtrato(): void;
    transferir(contaDestino: Conta, valor: number): void;
}
//# sourceMappingURL=conta.d.ts.map