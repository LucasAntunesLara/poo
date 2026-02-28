import { Computador } from "./computador";

// Criando um objeto por meio da classe Computador
let comp1 = new Computador();

comp1.marcaProcessador = "Intel";
comp1.frequenciaProcessador = 3.4;
comp1.nucleosProcessador = 8;
comp1.placaMae = "Asus";
comp1.qtdArmazenamento = 2;
comp1.sistemaOperacional = "Linux";
comp1.quantidadeMemoriaRam = 32;

comp1.ligar();

// A partir da classe Computador, crie 2 computadores com configurações diferentes
let comp2 = new Computador();

comp2.marcaProcessador = "AMD";
comp2.frequenciaProcessador = 3.4;
comp2.nucleosProcessador = 4;
comp2.placaMae = "MSI";
comp2.qtdArmazenamento = 2;
comp2.sistemaOperacional = "Windows 11";
comp2.quantidadeMemoriaRam = 16;

let comp3 = new Computador();

comp3.marcaProcessador = "Intel Celerun";
comp3.frequenciaProcessador = 2.5;
comp3.nucleosProcessador = 2;
comp3.placaMae = "Asus";
comp3.qtdArmazenamento = 1;
comp3.sistemaOperacional = "Windows XP";
comp3.quantidadeMemoriaRam = 4;
