export class Cliente {
  private _id: number
  public get id(): number {
    return this._id
  }

  private _nome: string
  public get nome(): string {
    return this._nome
  }
  public set nome(value: string) {
    this._nome = value
  }

  constructor(id: number, nome: string) {
    this._id = id
    this._nome = nome
  }
}

const cliente1 = new Cliente(1, 'Nome 1')
const cliente2 = new Cliente(2, 'Nome 2')

console.log(cliente1)
console.log(cliente2)
