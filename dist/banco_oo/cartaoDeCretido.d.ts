import { Cliente } from './cliente';
export declare class CartaoDeCredito {
    private _numero;
    get numero(): number;
    private _cliente;
    get cliente(): Cliente;
    set cliente(value: Cliente);
    private _dataValidade;
    get dataValidade(): Date;
    set dataValidade(value: Date);
    constructor(numero: number, dataValidade: Date, cliente: Cliente);
}
//# sourceMappingURL=cartaoDeCretido.d.ts.map