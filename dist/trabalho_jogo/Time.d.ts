import { Jogador } from "./Jogador";
export declare class Time {
    private _nome;
    private _jogadores;
    private _pontos;
    constructor(nome: string);
    get nome(): string;
    get pontos(): number;
    adicionarJogador(jogador: Jogador): void;
    listarJogadores(): void;
    escalarJogador(numero: number): Jogador | undefined;
    adicionarPontos(pontos: number): void;
    get totalJogadores(): number;
}
//# sourceMappingURL=Time.d.ts.map