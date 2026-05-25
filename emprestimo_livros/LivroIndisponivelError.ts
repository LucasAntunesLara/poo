export class LivroIndisponivelError extends Error {
  constructor() {
    super('Livro indisponível.')
    this.name = 'LivroIndisponivelError'
  }
}
