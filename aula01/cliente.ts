export class Cliente {
  id: number
  nome: string
  cpf: string
  email: string
  endereco: string

  constructor(
    id: number,
    nome: string,
    cpf: string,
    email: string,
    endereco: string,
  ) {
    this.id = id
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.endereco = endereco
  }
}
