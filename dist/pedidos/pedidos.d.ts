import { Cliente } from './cliente';
import { ItemPedido } from './itemPedidos';
export declare class Pedidos {
    private _numero;
    get numero(): number;
    private _data;
    get data(): string;
    private _cliente;
    get cliente(): Cliente;
    set cliente(value: Cliente);
    private _itemsPedidos;
    get itemsPedidos(): ItemPedido[];
    private _status;
    get status(): string;
    constructor(cliente: Cliente);
    private gerarID;
    adicionarItem(item: ItemPedido): void;
    calcularValorTotal(): number;
    private alterarStatus;
    removerItem(idItem: number): ItemPedido[];
}
//# sourceMappingURL=pedidos.d.ts.map