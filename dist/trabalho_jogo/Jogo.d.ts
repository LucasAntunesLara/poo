import { Time } from "./Time";
export declare class Jogo {
    private _timeCasa;
    private _timeVisitante;
    private _placarCasa;
    private _placarVisitante;
    constructor(timeCasa: Time, timeVisitante: Time);
    get placar(): string;
    realizarChute(time: Time, numeroJogador: number): void;
    private simularDefesa;
    iniciarJogo(): void;
}
//# sourceMappingURL=Jogo.d.ts.map