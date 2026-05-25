import {Funcionario} from '../banco_oo/funcionario'
import {Gerente} from '../banco_oo/gerente'
import {SistemaAutenticacao} from './SistemaAutenticacao'

const sistemaAutenticacao = new SistemaAutenticacao()

const funcionario = new Funcionario('usuarioNormal', 2026)
const administrador = new Gerente('admin', 1234)

console.log(
  `Funcioário tentando logar: ${sistemaAutenticacao.validar(funcionario)}`,
)

console.log(
  `Administrador tentando logar: ${sistemaAutenticacao.validar(administrador)}`,
)
