export class Usuario {
  private _nome: string

  private _email: string

  private _senha: string

  public get nome(): string {
    return this._nome
  }

  constructor(nome: string, email: string, senha: string) {
    this._nome = nome
    this._email = email
    this._senha = senha
  }

  public set nome(nome: string) {
    this._nome = nome
  }

  public get email(): string {
    return this._email
  }

  public set email(email: string) {
    if (this.validarEmail(email)) this._email = email
    else console.log('Este não é um email válido.')
  }

  public validarEmail(email: string) {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return regex.test(email)
  }

  public get senha(): string {
    return this._senha
  }
  public set senha(senha: string) {
    this._senha = senha
  }

  public recuperarSenha(email: string) {
    console.log(`🔗 Link de recuperação de senha enviado para ${this.email}.`)
  }

  public verificarLogin(email: string, senha: string) {
    return this.validarEmail(email) &&
      typeof senha === 'string' &&
      senha === this._senha &&
      senha &&
      email
      ? true
      : false
  }
}
