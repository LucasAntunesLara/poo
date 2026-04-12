"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goleiro = void 0;
const Jogador_1 = require("./Jogador");
class Goleiro extends Jogador_1.Jogador {
    _defesas;
    constructor(nome, numero) {
        super(nome, numero);
        this._defesas = 0;
    }
    get defesas() {
        return this._defesas;
    }
    defender() {
        this._defesas++;
        console.log(`${this._nome} (Goleiro) faz uma defesa espetacular! Defesas: ${this._defesas}`);
        this.energia -= 5;
    }
    // Implementação do método abstrato
    celebrar() {
        console.log(`${this._nome} bate no peito e vibra com a defesa!`);
    }
    executarAcao() {
        console.log(`${this._nome} organiza a barreira e se prepara para o chute.`);
    }
}
exports.Goleiro = Goleiro;
//# sourceMappingURL=Goleiro.js.map