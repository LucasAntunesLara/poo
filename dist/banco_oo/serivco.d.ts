import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
export declare abstract class Servico {
    protected _contratante: Cliente;
    protected _responsavel: Funcionario;
    protected _dataDeContratacao: string;
    constructor(contratante: Cliente, responsavel: Funcionario, dataDeContratacao: string);
    imprimir(): void;
    get contratante(): Cliente;
    set contratante(value: Cliente);
    get responsavel(): Funcionario;
    set responsavel(value: Funcionario);
    get dataDeContratacao(): string;
    set dataDeContratacao(value: string);
}
//# sourceMappingURL=serivco.d.ts.map