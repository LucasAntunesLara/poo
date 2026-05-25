import {InterfaceUsuario} from './InterfaceUsuario'

class Funcionario implements InterfaceUsuario {
  private _usuario: string
  private _senha: string

  constructor(usuario: string, senha: string) {
    this._usuario = usuario
    this._senha = senha
  }

  public getUsuario(): string {
    return this._usuario
  }

  public getSenha(): string {
    return this._senha
  }
}
