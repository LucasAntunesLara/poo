"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
// Classe base abstrata que representa um atleta em campo
class Jogador {
    _nome;
    _numero;
    _energia;
    _posicaoX;
    _posicaoY;
    constructor(nome, numero) {
        this._nome = nome;
        this._numero = numero;
        this._energia = 100;
        this._posicaoX = 0;
        this._posicaoY = 0;
    }
    // Getters e Setters (Encapsulamento)
    get nome() {
        return this._nome;
    }
    get numero() {
        return this._numero;
    }
    get energia() {
        return this._energia;
    }
    set energia(valor) {
        if (valor < 0)
            this._energia = 0;
        else if (valor > 100)
            this._energia = 100;
        else
            this._energia = valor;
    }
    get posicaoX() {
        return this._posicaoX;
    }
    get posicaoY() {
        return this._posicaoY;
    }
    // Métodos comuns a todos os jogadores
    mover(deltaX, deltaY) {
        this._posicaoX += deltaX;
        this._posicaoY += deltaY;
        this.energia -= 2;
        console.log(`${this._nome} moveu para (${this._posicaoX}, ${this._posicaoY}). Energia: ${this._energia}`);
    }
    // Método que pode ser sobrescrito
    executarAcao() {
        console.log(`${this._nome} executa uma ação básica.`);
    }
}
exports.Jogador = Jogador;
//# sourceMappingURL=Jogador.js.map