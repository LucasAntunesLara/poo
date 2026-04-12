import {Usuario} from './usuario'

export class Administrador extends Usuario {
  private _nivelAcesso: 1 | 2

  constructor(nome: string, email: string, senha: string, nivelAcesso: 1 | 2) {
    super(nome, email, senha)
    this._nivelAcesso = nivelAcesso
  }

  public get nivelAcesso_1(): 1 | 2 {
    return this._nivelAcesso
  }

  public set nivelAcesso_1(value: 1 | 2) {
    this._nivelAcesso = value
  }

  public recuperarSenha(email: string): void {
    if (!this.validarEmail(email)) {
      console.log('❌ Formato de email inválido.')

      return
    }

    if (email !== this.email) {
      console.log('❌ Email não corresponde ao cadastro do administrador.')

      return
    }

    switch (this._nivelAcesso) {
      case 1:
        console.log('📧 Gerando token seguro de recuperação de senha...')

        const token = this.gerarTokenSeguro()
        console.log(`✅ Token gerado: ${token}`)

        console.log(
          `🔗 Link de recuperação: https://sistema.com/recuperar?token=${token}`,
        )
        console.log(`📧 Token enviado para ${this.email}`)
        console.log('⏰ Token expira em 15 minutos.')

        break

      case 2:
        console.log(
          '📱 Enviando código de verificação para seu email e telefone cadastrados...',
        )
        console.log('✅ Código de verificação enviado. Validade: 10 minutos.')
        console.log(`📧 Confirmação enviada para ${this.email}`)
        console.log(
          '⚠️ Para redefinir sua senha, acesse o link enviado e insira o código de verificação.',
        )

        break
      default:
        console.log('❌ Nível de acesso não reconhecido.')
    }
  }

  private gerarTokenSeguro(): string {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let token = ''

    for (let i = 0; i < 32; i++)
      token += caracteres.charAt(Math.floor(Math.random() * caracteres.length))

    return token
  }
}
