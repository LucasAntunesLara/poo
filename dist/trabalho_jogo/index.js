"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Time_1 = require("./Time");
const Atacante_1 = require("./Atacante");
const Defensor_1 = require("./Defensor");
const Goleiro_1 = require("./Goleiro");
const Jogo_1 = require("./Jogo");
// Instanciando jogadores (objetos)
const atacante1 = new Atacante_1.Atacante("Neymar", 10);
const atacante2 = new Atacante_1.Atacante("Vinicius Jr", 7);
const defensor1 = new Defensor_1.Defensor("Thiago Silva", 3);
const defensor2 = new Defensor_1.Defensor("Marquinhos", 4);
const goleiro1 = new Goleiro_1.Goleiro("Alisson", 1);
const atacante3 = new Atacante_1.Atacante("Messi", 10);
const atacante4 = new Atacante_1.Atacante("Mbappé", 7);
const defensor3 = new Defensor_1.Defensor("Ramos", 4);
const defensor4 = new Defensor_1.Defensor("Van Dijk", 3);
const goleiro2 = new Goleiro_1.Goleiro("Courtois", 1);
// Criando times
const timeBrasil = new Time_1.Time("Brasil");
const timeFranca = new Time_1.Time("França");
// Adicionando jogadores aos times
timeBrasil.adicionarJogador(atacante1);
timeBrasil.adicionarJogador(atacante2);
timeBrasil.adicionarJogador(defensor1);
timeBrasil.adicionarJogador(defensor2);
timeBrasil.adicionarJogador(goleiro1);
timeFranca.adicionarJogador(atacante3);
timeFranca.adicionarJogador(atacante4);
timeFranca.adicionarJogador(defensor3);
timeFranca.adicionarJogador(defensor4);
timeFranca.adicionarJogador(goleiro2);
// Listando jogadores
timeBrasil.listarJogadores();
timeFranca.listarJogadores();
// Criando e iniciando o jogo
const jogo = new Jogo_1.Jogo(timeBrasil, timeFranca);
jogo.iniciarJogo();
// Testes de movimentação e encapsulamento
console.log("\n--- Testes de Movimentação ---");
atacante1.mover(5, 0);
atacante1.mover(2, 1);
console.log(`Energia do atacante: ${atacante1.energia}`);
atacante1.energia = 200; // Testando setter (não ultrapassa 100)
console.log(`Energia após tentativa de setar 200: ${atacante1.energia}`);
//# sourceMappingURL=index.js.map