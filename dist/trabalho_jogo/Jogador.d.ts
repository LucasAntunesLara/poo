export declare abstract class Jogador {
    protected _nome: string;
    protected _numero: number;
    protected _energia: number;
    protected _posicaoX: number;
    protected _posicaoY: number;
    constructor(nome: string, numero: number);
    get nome(): string;
    get numero(): number;
    get energia(): number;
    set energia(valor: number);
    get posicaoX(): number;
    get posicaoY(): number;
    mover(deltaX: number, deltaY: number): void;
    abstract celebrar(): void;
    executarAcao(): void;
}
//# sourceMappingURL=Jogador.d.ts.map