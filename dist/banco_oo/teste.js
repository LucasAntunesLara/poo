"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const emprestimo_1 = require("./emprestimo");
const funcionario_1 = require("./funcionario");
const seguroDeVeiculo_1 = require("./seguroDeVeiculo");
let cliente = new cliente_1.Cliente('Lucas');
let funcionario = new funcionario_1.Funcionario('Marcelo', 10000);
let emprestimo = new emprestimo_1.Emprestimo(cliente, funcionario, '16/03/2026', 10000, 2);
let seguroVeiculo = new seguroDeVeiculo_1.SeguroDeVeiculo(cliente, funcionario, '16/03/2026', 'Fusca', 6000, 8000);
//# sourceMappingURL=teste.js.map