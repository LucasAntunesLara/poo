import {Cliente} from './cliente'
import {Funcionario} from './funcionario'
import {Servico} from './serivco'

export class Emprestimo extends Servico {
  private _valor: number
  private _taxa: number

  constructor(
    contratante: Cliente,
    responsavel: Funcionario,
    dataDeContratacao: string,
    valor: number,
    taxa: number,
  ) {
    super(contratante, responsavel, dataDeContratacao)
    this._valor = valor
    this._taxa = taxa
  }

  public imprimir(): void {
    //Recupera o que foi feito no método da super classe
    super.imprimir()

    console.log(`Veículo: ${this._taxa}`)
    console.log(`Valor: ${this._valor}`)
  }

  public get valor(): number {
    return this._valor
  }
  public set valor(value: number) {
    this._valor = value
  }
  public get taxa(): number {
    return this._taxa
  }
  public set taxa(value: number) {
    this._taxa = value
  }
}
