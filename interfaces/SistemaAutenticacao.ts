import {InterfaceUsuario} from './InterfaceUsuario'

export class SistemaAutenticacao {
  public validar(usuario: InterfaceUsuario): boolean {
    const usuarioValido = usuario.getUsuario() == 'admin'

    const senhaValida = usuario.getSenha() == '1234'

    return usuarioValido && senhaValida
  }
}
