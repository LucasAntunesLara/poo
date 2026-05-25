export class Usuario {
  private _id: number
  private _nome: string
  private _suspenso: boolean

  constructor(id: number, nome: string, suspenso: boolean) {
    this._id = id
    this._nome = nome
    this._suspenso = suspenso
  }

  public get id(): number {
    return this._id
  }

  public get nome(): string {
    return this._nome
  }

  public set nome(value: string) {
    this._nome = value
  }

  public get suspenso(): boolean {
    return this._suspenso
  }

  public set suspenso(value: boolean) {
    this._suspenso = value
  }
}
