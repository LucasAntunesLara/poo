import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Servico } from './serivco';
export declare class SeguroDeVeiculo extends Servico {
    private _veiculo;
    private _valorDoSeguroDeVeiculo;
    private _franquia;
    constructor(contratante: Cliente, responsavel: Funcionario, dataDeContratacao: string, veiculo: string, valorDoSeguroDeVeiculo: number, franquia: number);
    imprimir(): void;
}
//# sourceMappingURL=seguroDeVeiculo.d.ts.map