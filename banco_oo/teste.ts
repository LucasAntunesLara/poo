import {Cliente} from './cliente'
import {Emprestimo} from './emprestimo'
import {Funcionario} from './funcionario'
import {SeguroDeVeiculo} from './seguroDeVeiculo'
import {Servico} from './serivco'

let cliente = new Cliente('Lucas')
let funcionario = new Funcionario('Marcelo', 10000)

let emprestimo = new Emprestimo(cliente, funcionario, '16/03/2026', 10000, 2)
let seguroVeiculo = new SeguroDeVeiculo(
  cliente,
  funcionario,
  '16/03/2026',
  'Fusca',
  6000,
  8000,
)
