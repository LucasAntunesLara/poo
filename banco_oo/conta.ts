import {Agencia} from './agencia'

export class Conta {
  private _numero: number
  public getNumero(): number {
    return this._numero
  }

  private _saldo: number
  public get saldo(): number {
    return this._saldo
  }
  public set saldo(value: number) {
    this._saldo = value
  }
  private _limite: number
  public get limite(): number {
    return this._limite
  }
  public set limite(value: number) {
    this._limite = value
  }
  private _agencia: Agencia
  public get agencia(): Agencia {
    return this._agencia
  }

  constructor(numero: number, saldo: number, agencia: Agencia) {
    this._numero = numero
    this._saldo = saldo
    this._limite = 100
    this._agencia = agencia
  }

  consultarSaldo() {
    console.log(`**Saldo atual da conta ${this._numero}: ${this._saldo} **`)
  }
  depositar(valor: number) {
    if (this._saldo + valor > this.limite) {
      console.log('Limite excedido. Por favor tente com uma quantia menor.')
      return
    }

    this._saldo += valor

    console.log(`R$${valor} foi depositado na conta ${this._numero}`)
    this.consultarSaldo()
  }

  sacar(valor: number) {
    this._saldo -= valor

    console.log(`R$${valor} foi sacado da conta ${this._numero}`)
    this.consultarSaldo()
  }

  imprimirExtrato() {
    console.log(`**Numero da conta: ${this._numero}**`)
    console.log(`**Agência da conta: ${this._agencia.numero}**`)
    this.consultarSaldo()
    console.log(`**Limite: ${this.limite}**`)
  }

  transferir(contaDestino: Conta, valor: number) {
    this.sacar(valor)
    contaDestino.depositar(valor)
  }
}

const conta1 = new Conta(1, 20, new Agencia(1))
const conta2 = new Conta(2, 40, new Agencia(2))

console.log(conta1)
console.log(conta2)

const conta3 = new Conta(3, 200, new Agencia(3))
console.log('\nNova conta criada com sucesso!')
console.log('Número:', conta3.getNumero())
console.log('Saldo:', conta3.saldo)
console.log('Limite:', conta3.limite)

console.log('\n')

conta1.imprimirExtrato()
console.log('\n')
conta1.depositar(20)
console.log('\n')
conta1.sacar(10)

conta1.transferir(conta2, 10)

console.log('\n')

conta1.consultarSaldo()
conta2.consultarSaldo()
