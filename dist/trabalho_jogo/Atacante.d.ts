import { Jogador } from "./Jogador";
export declare class Atacante extends Jogador {
    private _gols;
    constructor(nome: string, numero: number);
    get gols(): number;
    chutar(): void;
    marcarGol(): void;
    celebrar(): void;
    executarAcao(): void;
}
//# sourceMappingURL=Atacante.d.ts.map