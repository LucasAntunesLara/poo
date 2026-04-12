export declare class Gerente {
    private _nome;
    get nome(): string;
    set nome(value: string);
    private _salario;
    get salario(): number;
    set salario(value: number);
    constructor(nome: string, salario: number);
    aumentarSalarioTaxaFixa(): void;
    aumentarSalarioTaxaVariavel(taxa: number): void;
}
//# sourceMappingURL=gerente.d.ts.map