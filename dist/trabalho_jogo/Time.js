"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    _nome;
    _jogadores = [];
    _pontos;
    constructor(nome) {
        this._nome = nome;
        this._pontos = 0;
    }
    get nome() {
        return this._nome;
    }
    get pontos() {
        return this._pontos;
    }
    // Adicionar jogador ao time (lista de objetos)
    adicionarJogador(jogador) {
        this._jogadores.push(jogador);
        console.log(`${jogador.nome} (${jogador.numero}) foi adicionado ao ${this._nome}.`);
    }
    listarJogadores() {
        console.log(`\n--- Jogadores do ${this._nome} ---`);
        this._jogadores.forEach((j) => {
            console.log(`${j.numero} - ${j.nome} (Energia: ${j.energia})`);
        });
    }
    // Ação de um jogador específico
    escalarJogador(numero) {
        const jogador = this._jogadores.find((j) => j.numero === numero);
        if (!jogador) {
            console.log(`Jogador com a camisa ${numero} não encontrado.`);
            return undefined;
        }
        return jogador;
    }
    adicionarPontos(pontos) {
        this._pontos += pontos;
        console.log(`${this._nome} agora tem ${this._pontos} pontos.`);
    }
    // Demonstração de encapsulamento: não permitimos acesso direto à lista
    get totalJogadores() {
        return this._jogadores.length;
    }
}
exports.Time = Time;
//# sourceMappingURL=Time.js.map