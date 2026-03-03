import { Cliente } from './cliente';
import { ItemPedido } from './itemPedidos';
export declare class Pedidos {
    numero: number;
    data: string;
    cliente: Cliente;
    itemsPedidos: ItemPedido[];
    status: string;
    constructor(numero: number, data: string, cliente: Cliente, itemsPedidos: ItemPedido[], status: string);
    adicionarItem(item: ItemPedido): void;
    calcularValorTotal(): number;
    alterarStatus(status: string): void;
    removerItem(idItem: number): ItemPedido[];
}
//# sourceMappingURL=pedidos.d.ts.map