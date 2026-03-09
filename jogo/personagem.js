"use strict";
// Uma empresa está desenvolvendo um jogo de aventura.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
// No jogo, cada personagem contém um nome, um número X de vidas e um nível que pode ser básico, intermediário e avançado. Os personagem também podem atacar, receber dano (reduz os pontos de vida) e usar poção para recuperar pontos de vida.
// 1 - Crie a classe Personagem, aplicando corretamente os conceitos de classe, atributos e métodos.
// 2 - Crie dois objetos utilizando a classe Personagem.
var Personagem = /** @class */ (function () {
    function Personagem() {
        this.nome = "";
        this.numeroVidas = 5;
        this.nivel = "Intermediário";
    }
    Personagem.prototype.atacar = function () {
        console.log("Ataque realizado");
    };
    Personagem.prototype.receberDano = function (reducaoPontosDeVida) {
        this.numeroVidas -= reducaoPontosDeVida;
        console.log("Dano recebido! ".concat(this.nome, ", sua vida agora \u00E9 ").concat(this.numeroVidas, "!"));
    };
    Personagem.prototype.recuperarPontosVida = function (recuperacaoPontosVida) {
        console.log("Recuperando vida...");
        this.numeroVidas += recuperacaoPontosVida;
        console.log("Vida recuperada! ".concat(this.nome, ", sua vida agora \u00E9 ").concat(this.numeroVidas, "!"));
    };
    return Personagem;
}());
exports.Personagem = Personagem;
