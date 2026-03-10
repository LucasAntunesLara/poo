import {Pedidos} from './pedidos'
import {ItemPedido} from './itemPedidos'
import {Cliente} from './cliente'

let cliente = new Cliente('Nome', '999.999.999-99', 'Email', 'Endereço')

let item1 = new ItemPedido(1, 'Item 1', 10, 100)
let item2 = new ItemPedido(2, 'Item 2', 20, 100)
let item3 = new ItemPedido(3, 'Item 3', 30, 100)

let pedido = new Pedidos(cliente)

console.log(pedido.calcularValorTotal())

pedido.adicionarItem(item1)
pedido.adicionarItem(item2)
pedido.adicionarItem(item3)

console.log(pedido.calcularValorTotal())

pedido.removerItem(1)

console.log(pedido.calcularValorTotal())

console.log(pedido.status)

console.log(pedido.cliente)

console.log(pedido.itemsPedidos)

console.log(pedido.data)

console.log(pedido.numero)

console.log(pedido)

console.log(pedido.cliente.nome)
