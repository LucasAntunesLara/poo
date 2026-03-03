"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computador_1 = require("./computador");
var memoriaRam_1 = require("./memoriaRam");
var processador_1 = require("./processador");
// Criando um objeto por meio da classe Computador
var proc1 = new processador_1.Processador('Intel', 8, 3.4);
var comp1 = new computador_1.Computador(proc1, 2);
comp1.placaMae = 'Asus';
comp1.sistemaOperacional = 'Linux';
comp1.adiconarRAM(new memoriaRam_1.MemoriaRAM(16, 3200));
comp1.adiconarRAM(new memoriaRam_1.MemoriaRAM(16, 3200));
comp1.adiconarRAM(new memoriaRam_1.MemoriaRAM(32, 3200));
comp1.ligar();
// A partir da classe Computador, crie 2 computadores com configurações diferentes
// let comp2 = new Computador(new Processador('AMD', 4, 3.4), 32, 2)
// comp2.placaMae = 'MSI'
// comp2.quantidadeArmazenamento = 2
// comp2.sistemaOperacional = 'Windows 11'
// comp2.quantidadeMemoriaRam = 16
// let comp3 = new Computador(new Processador('Intel Celerun', 4, 3.4), 32, 2)
// comp3.placaMae = 'Asus'
// comp3.quantidadeArmazenamento = 1
// comp3.sistemaOperacional = 'Windows XP'
// comp3.quantidadeMemoriaRam = 4
