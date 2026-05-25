export class UsuarioSuspensoError extends Error {
  constructor() {
    super('Usuário suspenso.')
    this.name = 'UsuarioSuspensoError'
  }
}
