import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Servico } from './serivco';
export declare class Emprestimo extends Servico {
    private _valor;
    private _taxa;
    constructor(contratante: Cliente, responsavel: Funcionario, dataDeContratacao: string, valor: number, taxa: number);
    imprimir(): void;
    get valor(): number;
    set valor(value: number);
    get taxa(): number;
    set taxa(value: number);
}
//# sourceMappingURL=emprestimo.d.ts.map