"use strict";
// Uma empresa está desenvolvendo um jogo de aventura.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
// No jogo, cada personagem contém um nome, um número X de vidas e um nível que pode ser básico, intermediário e avançado. Os personagem também podem atacar, receber dano (reduz os pontos de vida) e usar poção para recuperar pontos de vida.
// 1 - Crie a classe Personagem, aplicando corretamente os conceitos de classe, atributos e métodos.
// 2 - Crie dois objetos utilizando a classe Personagem.
class Personagem {
    nome = "";
    numeroVidas = 5;
    nivel = "Intermediário";
    atacar() {
        console.log("Ataque realizado");
    }
    receberDano(reducaoPontosDeVida) {
        this.numeroVidas -= reducaoPontosDeVida;
        console.log(`Dano recebido! ${this.nome}, sua vida agora é ${this.numeroVidas}!`);
    }
    recuperarPontosVida(recuperacaoPontosVida) {
        console.log("Recuperando vida...");
        this.numeroVidas += recuperacaoPontosVida;
        console.log(`Vida recuperada! ${this.nome}, sua vida agora é ${this.numeroVidas}!`);
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=personagem.js.map