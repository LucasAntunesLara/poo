"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
// Definir classe
var Computador = /** @class */ (function () {
    function Computador(processador, quantidadeArmazenamento) {
        // Atributos - Características
        this.quantidadeMemoriaRam = 0;
        this.placaMae = '';
        this.quantidadeArmazenamento = 0;
        this.bios = '';
        this.sistemaOperacional = '';
        this.programasInstalados = [];
        this.processador = processador;
        this.memoriaRam = [];
        this.quantidadeArmazenamento = quantidadeArmazenamento;
    }
    Computador.prototype.adiconarRAM = function (memoria) {
        this.memoriaRam.push(memoria);
    };
    Computador.prototype.mostrarRAMTotal = function () {
        var totalRAM = 0;
        this.memoriaRam.forEach(function (element) {
            totalRAM += element.capacidade;
        });
        return totalRAM;
    };
    // Métodos - Funções ou comportamentos
    Computador.prototype.ligar = function () {
        console.log('Ligando o computador...');
        console.log('Inicializando a placa mãe ' + this.placaMae);
        console.log("Inicializando processador ".concat(this.processador.marcaProcessador, " ").concat(this.processador.frequenciaProcessador, " ").concat(this.processador.nucleosProcessador));
        console.log("Inicializando o dispositivo de armazenamento ".concat(this.quantidadeArmazenamento));
        console.log("Inicializando Mem\u00F3ria RAM ".concat(this.mostrarRAMTotal(), "GB"));
        console.log("Inicializando a BIOS ".concat(this.bios));
        this.carregarSistemaOperacional();
        console.log('Seu computador está pronto para uso');
    };
    Computador.prototype.desligar = function () {
        console.log('Método não implementado');
    };
    Computador.prototype.carregarSistemaOperacional = function () {
        console.log("Inicializando o Sistema Operacional ".concat(this.sistemaOperacional));
    };
    Computador.prototype.instalarPrograma = function (programa) {
        console.log('Método não implementado');
    };
    Computador.prototype.abrirPrograma = function (programa) {
        console.log('Método não implementado');
    };
    Computador.prototype.desinstalarPrograma = function (programa) {
        console.log('Método não implementado');
    };
    return Computador;
}());
exports.Computador = Computador;
