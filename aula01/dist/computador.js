"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
// Definir classe
class Computador {
    // Atributos - Características
    quantidadeMemoriaRam = 0;
    memoriaRam;
    placaMae = '';
    processador;
    quantidadeArmazenamento = 0;
    bios = '';
    sistemaOperacional = '';
    programasInstalados = [];
    constructor(processador, quantidadeArmazenamento) {
        this.processador = processador;
        this.memoriaRam = [];
        this.quantidadeArmazenamento = quantidadeArmazenamento;
    }
    adiconarRAM(memoria) {
        this.memoriaRam.push(memoria);
    }
    mostrarRAMTotal() {
        let totalRAM = 0;
        this.memoriaRam.forEach(element => {
            totalRAM += element.capacidade;
        });
        return totalRAM;
    }
    // Métodos - Funções ou comportamentos
    ligar() {
        console.log('Ligando o computador...');
        console.log('Inicializando a placa mãe ' + this.placaMae);
        console.log(`Inicializando processador ${this.processador.marcaProcessador} ${this.processador.frequenciaProcessador} ${this.processador.nucleosProcessador}`);
        console.log(`Inicializando o dispositivo de armazenamento ${this.quantidadeArmazenamento}`);
        console.log(`Inicializando Memória RAM ${this.mostrarRAMTotal()}GB`);
        console.log(`Inicializando a BIOS ${this.bios}`);
        this.carregarSistemaOperacional();
        console.log('Seu computador está pronto para uso');
    }
    desligar() {
        console.log('Método não implementado');
    }
    carregarSistemaOperacional() {
        console.log(`Inicializando o Sistema Operacional ${this.sistemaOperacional}`);
    }
    instalarPrograma(programa) {
        console.log('Método não implementado');
    }
    abrirPrograma(programa) {
        console.log('Método não implementado');
    }
    desinstalarPrograma(programa) {
        console.log('Método não implementado');
    }
}
exports.Computador = Computador;
//# sourceMappingURL=computador.js.map