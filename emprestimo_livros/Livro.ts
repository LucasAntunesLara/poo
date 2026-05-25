export class Livro {
  private _id: number
  private _titulo: string
  private _disponivel: boolean

  constructor(id: number, titulo: string, disponivel: boolean) {
    this._id = id
    this._titulo = titulo
    this._disponivel = disponivel
  }

  public get id(): number {
    return this._id
  }

  public get titulo(): string {
    return this._titulo
  }

  public set titulo(value: string) {
    this._titulo = value
  }

  public get disponivel(): boolean {
    return this._disponivel
  }

  public set disponivel(value: boolean) {
    this._disponivel = value
  }
}
