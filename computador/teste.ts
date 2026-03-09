import {Computador} from './computador'
import {MemoriaRAM} from './memoriaRam'
import {Processador} from './processador'

// Criando um objeto por meio da classe Computador
let proc1 = new Processador('Intel', 8, 3.4)

let comp1 = new Computador(proc1, 2)
comp1.placaMae = 'Asus'
comp1.sistemaOperacional = 'Linux'
comp1.adiconarRAM(new MemoriaRAM(16, 3200))
comp1.adiconarRAM(new MemoriaRAM(16, 3200))
comp1.adiconarRAM(new MemoriaRAM(32, 3200))

comp1.ligar()

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
