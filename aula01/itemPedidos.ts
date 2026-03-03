export class ItemPedido {
  idItem: number
  descricao: string
  quantidade: number

  constructor(idItem: number, descricao: string, quantidade: number) {
    this.idItem = idItem
    this.descricao = descricao
    this.quantidade = quantidade
  }

  calcularTotalItem(): number {
    return this.quantidade
  }
}
