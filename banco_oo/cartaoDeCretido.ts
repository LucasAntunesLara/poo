import {Cliente} from './cliente'

export class CartaoDeCredito {
  private _numero: number
  public get numero(): number {
    return this._numero
  }

  private _cliente: Cliente
  public get cliente(): Cliente {
    return this._cliente
  }
  public set cliente(value: Cliente) {
    this._cliente = value
  }
  private _dataValidade: Date
  public get dataValidade(): Date {
    return this._dataValidade
  }
  public set dataValidade(value: Date) {
    this._dataValidade = value
  }

  constructor(numero: number, dataValidade: Date, cliente: Cliente) {
    this._numero = numero
    this._dataValidade = dataValidade
    this._cliente = cliente
  }
}

let cartaoDeCredito = new CartaoDeCredito(
  1234,
  new Date(),
  new Cliente(1, 'Cliente 1'),
)
let cartaoDeCredito1 = new CartaoDeCredito(
  1235,
  new Date(),
  new Cliente(2, 'Cliente 2'),
)

console.log(cartaoDeCredito)
console.log(cartaoDeCredito1)
