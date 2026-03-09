import {Cliente} from './cliente'
import {ItemPedido} from './itemPedidos'

export class Pedidos {
  numero: number
  data: string
  cliente: Cliente
  itemsPedidos: ItemPedido[]
  status: string

  constructor(
    numero: number,
    data: string,
    cliente: Cliente,
    itemsPedidos: ItemPedido[],
    status: string,
  ) {
    this.numero = numero
    this.data = data
    this.cliente = cliente
    this.itemsPedidos = itemsPedidos
    this.status = status
  }

  adicionarItem(item: ItemPedido) {
    this.itemsPedidos.push(item)
  }

  calcularValorTotal(): number {
    let total = 0

    this.itemsPedidos.forEach(item => {
      total += item.calcularTotalItem()
    })

    return total
  }

  alterarStatus(status: string) {
    this.status = status
  }

  removerItem(idItem: number) {
    return this.itemsPedidos.filter(item => item.idItem !== idItem)
  }
}
