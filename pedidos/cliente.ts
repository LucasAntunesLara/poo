import {v4 as uuidv4} from 'uuid'

/*
 * Public - acesso total (não recomendado)
 * Private - acesso somente dentro da própria classe
 * Protected - acesso somente dentro da própria classe e das classes derivadas (herança)
 */

export class Cliente {
  private _id: string
  public get id(): string {
    return this._id
  }

  private _nome: string
  public get nome(): string {
    return this._nome
  }

  private _cpf: string
  public get cpf(): string {
    return this._cpf
  }
  public set cpf(value: string) {
    this._cpf = value
  }
  private _email: string
  public get email(): string {
    return this._email
  }
  public set email(value: string) {
    this._email = value
  }
  private _endereco: string
  public get endereco(): string {
    return this._endereco
  }
  public set endereco(value: string) {
    this._endereco = value
  }

  constructor(nome: string, cpf: string, email: string, endereco: string) {
    this._id = uuidv4()
    this._nome = nome
    this._cpf = cpf
    this._email = email
    this._endereco = endereco
  }
}
