"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defensor = void 0;
const Jogador_1 = require("./Jogador");
class Defensor extends Jogador_1.Jogador {
    _desarmes;
    constructor(nome, numero) {
        super(nome, numero);
        this._desarmes = 0;
    }
    get desarmes() {
        return this._desarmes;
    }
    desarmar() {
        this._desarmes++;
        console.log(`${this._nome} (Defensor) realizou um desarme! Total: ${this._desarmes}`);
        this.energia -= 8;
    }
    // Implementação do método abstrato
    celebrar() {
        console.log(`${this._nome} dá um soco no ar comemorando a defesa!`);
    }
    executarAcao() {
        console.log(`${this._nome} se posiciona para interceptar o ataque.`);
    }
}
exports.Defensor = Defensor;
//# sourceMappingURL=Defensor.js.map