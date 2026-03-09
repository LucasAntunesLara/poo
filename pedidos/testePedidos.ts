import {Pedidos} from './pedidos'
import {ItemPedido} from './itemPedidos'
import {Cliente} from './cliente'

let item1 = new ItemPedido(1, 'Item 1', 10, 100)
let item2 = new ItemPedido(2, 'Item 2', 20, 100)
let item3 = new ItemPedido(3, 'Item 3', 30, 100)

let cliente = new Cliente(1, 'Nome', '999.999.999-99', 'Email', 'Endereço')

let pedido = new Pedidos(1, '01/01/2020', cliente, [item1, item2], 'Pendente')

console.log(pedido.calcularValorTotal())

pedido.adicionarItem(item3)

console.log(pedido.calcularValorTotal())

pedido.removerItem(1)

console.log(pedido.calcularValorTotal())

pedido.alterarStatus('Entregue')

console.log(pedido.status)

console.log(pedido.cliente)

console.log(pedido.itemsPedidos)

console.log(pedido.data)

console.log(pedido.numero)

console.log(pedido)

console.log(pedido.cliente.nome)
