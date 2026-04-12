import {Cliente} from './cliente'
import {Funcionario} from './funcionario'

export abstract class Servico {
  protected _contratante: Cliente
  protected _responsavel: Funcionario
  protected _dataDeContratacao: string

  constructor(
    contratante: Cliente,
    responsavel: Funcionario,
    dataDeContratacao: string,
  ) {
    this._contratante = contratante
    this._responsavel = responsavel
    this._dataDeContratacao = dataDeContratacao
  }

  public imprimir() {
    console.log('Nome do contratante: ' + this._contratante.nome)

    console.log(`Nome do responsável: ${this._responsavel.nome}`)

    console.log(`Data de contratação: ${this._dataDeContratacao}`)
  }

  public get contratante(): Cliente {
    return this._contratante
  }
  public set contratante(value: Cliente) {
    this._contratante = value
  }
  public get responsavel(): Funcionario {
    return this._responsavel
  }
  public set responsavel(value: Funcionario) {
    this._responsavel = value
  }
  public get dataDeContratacao(): string {
    return this._dataDeContratacao
  }
  public set dataDeContratacao(value: string) {
    this._dataDeContratacao = value
  }
}
