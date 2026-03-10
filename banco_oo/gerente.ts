export class Gerente {
  private _nome: string
  public get nome(): string {
    return this._nome
  }
  public set nome(value: string) {
    this._nome = value
  }
  private _salario: number
  public get salario(): number {
    return this._salario
  }
  public set salario(value: number) {
    this._salario = value
  }
  constructor(nome: string, salario: number) {
    this._nome = nome
    this._salario = salario
  }

  aumentarSalarioTaxaFixa() {
    this.salario += this.salario * 0.1
    console.log('Seu salário foi incrementado em 10%')
  }

  aumentarSalarioTaxaVariavel(taxa: number) {
    this.salario += this.salario * taxa
    console.log(`Seu salário foi incrementado em ${taxa * 100}%`)
  }
}

const gerente1 = new Gerente('Gerente 1', 1000)
console.log(gerente1)
gerente1.aumentarSalarioTaxaFixa()
console.log(gerente1)
gerente1.aumentarSalarioTaxaVariavel(0.1)
console.log(gerente1)
