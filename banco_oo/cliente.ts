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

  constructor(nome: string) {
    this._id = Math.floor(Math.random() * (100 - 0) + 0)
    this._nome = nome
  }
}

const cliente1 = new Cliente('Nome 1')
const cliente2 = new Cliente('Nome 2')

console.log(cliente1)
console.log(cliente2)
