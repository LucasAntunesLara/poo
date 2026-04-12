"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
const Atacante_1 = require("./Atacante");
const Goleiro_1 = require("./Goleiro");
class Jogo {
    _timeCasa;
    _timeVisitante;
    _placarCasa;
    _placarVisitante;
    constructor(timeCasa, timeVisitante) {
        this._timeCasa = timeCasa;
        this._timeVisitante = timeVisitante;
        this._placarCasa = 0;
        this._placarVisitante = 0;
    }
    get placar() {
        return `${this._timeCasa.nome} ${this._placarCasa} x ${this._placarVisitante} ${this._timeVisitante.nome}`;
    }
    // Método que simula uma ação ofensiva
    realizarChute(time, numeroJogador) {
        const jogador = time.escalarJogador(numeroJogador);
        if (jogador && jogador instanceof Atacante_1.Atacante) {
            jogador.chutar();
            // Simula chance de gol
            const gol = Math.random() < 0.3;
            if (gol) {
                jogador.marcarGol();
                if (time === this._timeCasa)
                    this._placarCasa++;
                else
                    this._placarVisitante++;
                console.log(`Novo placar: ${this.placar}`);
            }
            else {
                console.log("O goleiro defendeu!");
                this.simularDefesa();
            }
        }
        else if (jogador) {
            console.log(`${jogador.nome} não é atacante, não pode chutar ao gol!`);
        }
    }
    simularDefesa() {
        // Escolhe um goleiro aleatório do time adversário para defender
        const timeAdversario = Math.random() < 0.5 ? this._timeCasa : this._timeVisitante;
        const goleiro = timeAdversario.escalarJogador(1); // Supondo que goleiro é camisa 1
        if (goleiro && goleiro instanceof Goleiro_1.Goleiro) {
            goleiro.defender();
        }
    }
    // Iniciar o jogo com algumas ações
    iniciarJogo() {
        console.log(`\n⚽ Jogo iniciado: ${this._timeCasa.nome} vs ${this._timeVisitante.nome} ⚽\n`);
        // Simula alguns lances
        this.realizarChute(this._timeCasa, 9); // Atacante camisa 9
        this.realizarChute(this._timeVisitante, 10); // Atacante camisa 10
        this.realizarChute(this._timeCasa, 7); // Atacante camisa 7
        this.realizarChute(this._timeVisitante, 11); // Atacante camisa 11
        console.log(`\n🏆 Fim de jogo! Placar final: ${this.placar} 🏆\n`);
        if (this._placarCasa > this._placarVisitante) {
            this._timeCasa.adicionarPontos(3);
            console.log(`${this._timeCasa.nome} venceu e ganha 3 pontos!`);
        }
        else if (this._placarVisitante > this._placarCasa) {
            this._timeVisitante.adicionarPontos(3);
            console.log(`${this._timeVisitante.nome} venceu e ganha 3 pontos!`);
        }
        else {
            this._timeCasa.adicionarPontos(1);
            this._timeVisitante.adicionarPontos(1);
            console.log("Empate! Cada time ganha 1 ponto.");
        }
    }
}
exports.Jogo = Jogo;
//# sourceMappingURL=Jogo.js.map