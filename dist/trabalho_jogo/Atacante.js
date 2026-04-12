"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atacante = void 0;
const Jogador_1 = require("./Jogador");
class Atacante extends Jogador_1.Jogador {
    _gols;
    constructor(nome, numero) {
        super(nome, numero);
        this._gols = 0;
    }
    get gols() {
        return this._gols;
    }
    // Sobrescrita de método (Herança)
    chutar() {
        console.log(`${this._nome} (Atacante) chuta com força ao gol!`);
        this.energia -= 10;
    }
    marcarGol() {
        this._gols++;
        console.log(`GOOOOOOL! ${this._nome} marcou o ${this._gols}º gol!`);
        this.celebrar();
    }
    // Implementação do método abstrato
    celebrar() {
        console.log(`${this._nome} comemora deslizando no gramado!`);
    }
    executarAcao() {
        console.log(`${this._nome} parte para cima da defesa adversária.`);
    }
}
exports.Atacante = Atacante;
//# sourceMappingURL=Atacante.js.map