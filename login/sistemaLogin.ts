import {Usuario} from './usuario'
import {Administrador} from './administrador'

export class SistemaLogin {
  private usuarios: Usuario[] = []

  public criarUsuario(
    nome: string,
    email: string,
    senha: string,
    nivelAcesso?: 1 | 2,
  ): void {
    if (this.acessarUsuarioPeloEmail(email)) {
      console.log(`Erro: O email ${email} já está cadastrado no sistema.`)
      return
    }

    if (!nome || nome.trim().length === 0) {
      console.log('Nome não pode estar vazio!')

      return
    }

    if (!senha || senha.length < 6) {
      console.log('A senha deve ter, no mínimo, 6 caracteres!')

      return
    }

    let usuario = null

    if (nivelAcesso) {
      usuario = new Administrador(nome, email, senha, nivelAcesso)
    } else {
      usuario = new Usuario(nome, email, senha)
    }

    this.usuarios.push(usuario)

    console.log(`Usuário ${nome} criado com sucesso! Email: ${email}`)
  }

  public login(email: string, senha: string): void {
    if (!email || !senha) {
      console.log('Por favor, preencha todos os campos.')
      return
    }

    const usuario = this.acessarUsuarioPeloEmail(email)

    if (!usuario) {
      console.log('Não foi encontrado usuário com esse email.')
      return
    }

    if (usuario.verificarLogin(email, senha)) {
      console.log(`✅ Login realizado com sucesso!`)
      console.log(`👋 Bem-vindo(a), ${usuario.nome}!`)
    } else
      console.log(
        'Falha no login: Credenciais inválidas. Verifique seu email e senha.',
      )
  }

  public recuperarSenha(email: string): void {
    const usuario = this.acessarUsuarioPeloEmail(email)

    if (!usuario) {
      console.log(
        'Se o email estiver cadastrado, você receberá as instruções de recuperação.',
      )
      return
    }

    usuario.recuperarSenha(email)
  }

  public acessarUsuarioPeloEmail(email: string): Usuario | null {
    return this.usuarios.find(usuario => usuario.email === email) || null
  }
}
