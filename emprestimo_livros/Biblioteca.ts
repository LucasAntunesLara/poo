import {Livro} from './Livro'
import {LivroIndisponivelError} from './LivroIndisponivelError'
import {LivroNaoEncontradoError} from './LivroNaoEncontradoError'
import {Usuario} from './Usuario'
import {UsuarioSuspensoError} from './UsuarioSuspensoError'

class Biblioteca {
  private livros: Livro[] = []
  private usuarios: Usuario[] = []

  public emprestarLivro(idLivro: number, idUsuario: number): void {
    try {
      // Buscar livro pelo ID
      const livro = this.livros.find(l => l.id === idLivro)

      if (!livro) throw new LivroNaoEncontradoError(idLivro)

      //Livro indisponível
      if (!livro.disponivel) {
        throw new LivroIndisponivelError(livro.titulo)
      }

      // Buscar usuário pelo ID
      const usuario = this.usuarios.find(u => u.id === idUsuario)

      //Usuário suspenso
      if (usuario && usuario.suspenso)
        throw new UsuarioSuspensoError(usuario.nome)

      livro.disponivel = false

      console.log(`✅ Empréstimo realizado com sucesso!`)
      console.log(`   Livro: "${livro.titulo}"`)
      console.log(`   Usuário: ${usuario?.nome || 'Usuário não cadastrado'}`)
    } catch (error) {
      if (error instanceof LivroNaoEncontradoError) {
        console.error(`❌ Erro de Empréstimo: ${error.message}`)
      } else if (error instanceof LivroIndisponivelError) {
        console.error(`❌ Erro de Empréstimo: ${error.message}`)
      } else if (error instanceof UsuarioSuspensoError) {
        console.error(`❌ Erro de Empréstimo: ${error.message}`)
      } else {
        console.error(`❌ Erro inesperado: ${error}`)
      }
      throw error
    }
  }
}
