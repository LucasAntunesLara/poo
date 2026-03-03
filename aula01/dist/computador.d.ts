import { MemoriaRAM } from './memoriaRam';
import { Processador } from './processador';
export declare class Computador {
    quantidadeMemoriaRam: number;
    memoriaRam: MemoriaRAM[];
    placaMae: string;
    processador: Processador;
    quantidadeArmazenamento: number;
    bios: string;
    sistemaOperacional: string;
    programasInstalados: string[];
    constructor(processador: Processador, quantidadeArmazenamento: number);
    adiconarRAM(memoria: MemoriaRAM): void;
    mostrarRAMTotal(): number;
    ligar(): void;
    desligar(): void;
    carregarSistemaOperacional(): void;
    instalarPrograma(programa: string): void;
    abrirPrograma(programa: string): void;
    desinstalarPrograma(programa: string): void;
}
//# sourceMappingURL=computador.d.ts.map