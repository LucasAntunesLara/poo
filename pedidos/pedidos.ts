import {Cliente} from './cliente'
import {ItemPedido} from './itemPedidos'

export class Pedidos {
  private _numero: number
  public get numero(): number {
    return this._numero
  }

  private _data: string
  public get data(): string {
    return this._data
  }

  private _cliente: Cliente
  public get cliente(): Cliente {
    return this._cliente
  }
  public set cliente(value: Cliente) {
    this._cliente = value
  }
  private _itemsPedidos: ItemPedido[]
  public get itemsPedidos(): ItemPedido[] {
    return this._itemsPedidos
  }

  private _status: string
  public get status(): string {
    return this._status
  }

  constructor(cliente: Cliente) {
    this._numero = this.gerarID(100, 1000)
    this._data = new Date().getDate().toString()
    this._cliente = cliente
    this._itemsPedidos = []
    this._status = 'Pendente'
  }

  private gerarID(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
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

  private alterarStatus(status: string) {
    this._status = status
  }

  removerItem(idItem: number) {
    return this.itemsPedidos.filter(item => item.idItem !== idItem)
  }
}
