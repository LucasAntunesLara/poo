export class ItemPedido {
  idItem: number
  descricao: string
  quantidade: number
  valorUnitario: number

  constructor(
    idItem: number,
    descricao: string,
    quantidade: number,
    valorUnitario: number,
  ) {
    this.idItem = idItem
    this.descricao = descricao
    this.quantidade = quantidade
    this.valorUnitario = valorUnitario
  }

  calcularTotalItem(): number {
    return this.quantidade * this.valorUnitario
  }
}
