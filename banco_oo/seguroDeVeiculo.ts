import {Cliente} from './cliente'
import {Funcionario} from './funcionario'
import {Servico} from './serivco'

export class SeguroDeVeiculo extends Servico {
  private _veiculo: string
  private _valorDoSeguroDeVeiculo: number
  private _franquia: number

  constructor(
    contratante: Cliente,
    responsavel: Funcionario,
    dataDeContratacao: string,
    veiculo: string,
    valorDoSeguroDeVeiculo: number,
    franquia: number,
  ) {
    super(contratante, responsavel, dataDeContratacao)

    this._veiculo = veiculo
    this._valorDoSeguroDeVeiculo = valorDoSeguroDeVeiculo
    this._franquia = franquia
  }

  public imprimir(): void {
    super.imprimir()

    console.log(`Veículo: ${this._veiculo}`)
    console.log(`Valor do seguro de veículo: ${this._valorDoSeguroDeVeiculo}`)
    console.log(`Franquia: ${this._franquia}`)
  }
}
