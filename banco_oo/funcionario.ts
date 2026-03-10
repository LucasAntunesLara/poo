export class Funcionario {
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

  aumentarSalario(aumento: number) {
    this._salario += aumento
  }

  consultarDados() {
    console.log(`Nome: ${this._nome}`)
    console.log(`Salário: ${this._salario}`)
  }
}

const funcionario1 = new Funcionario('Alan Patrick', 1000)
const funcionario2 = new Funcionario('Borré', 900)

funcionario1.consultarDados()

console.log('\n')

funcionario1.aumentarSalario(100)
funcionario2.aumentarSalario(500)

funcionario2.consultarDados()
