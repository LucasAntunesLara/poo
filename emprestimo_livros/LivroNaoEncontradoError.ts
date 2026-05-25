export class LivroNaoEncontradoError extends Error {
  constructor() {
    super('Livro não encontrado.')
    this.name = 'LivroNaoEncontradoError'
  }
}
