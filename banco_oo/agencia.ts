export class Agencia {
  private _numero: number
  public get numero(): number {
    return this._numero
  }

  constructor(numero: number) {
    this._numero = numero
  }
}

const agencia = new Agencia(1)
const agencia2 = new Agencia(2)

console.log(agencia)
console.log(agencia2)
