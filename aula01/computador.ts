import {MemoriaRAM} from './memoriaRam'
import {Processador} from './processador'

// Definir classe
export class Computador {
  // Atributos - Características
  quantidadeMemoriaRam: number = 0
  memoriaRam: MemoriaRAM[]
  placaMae: string = ''
  processador: Processador
  quantidadeArmazenamento: number = 0
  bios: string = ''
  sistemaOperacional: string = ''
  programasInstalados: string[] = []

  constructor(processador: Processador, quantidadeArmazenamento: number) {
    this.processador = processador
    this.memoriaRam = []
    this.quantidadeArmazenamento = quantidadeArmazenamento
  }

  adiconarRAM(memoria: MemoriaRAM) {
    this.memoriaRam.push(memoria)
  }

  mostrarRAMTotal() {
    let totalRAM = 0

    this.memoriaRam.forEach(element => {
      totalRAM += element.capacidade
    })

    return totalRAM
  }

  // Métodos - Funções ou comportamentos
  ligar() {
    console.log('Ligando o computador...')

    console.log('Inicializando a placa mãe ' + this.placaMae)

    console.log(
      `Inicializando processador ${this.processador.marcaProcessador} ${this.processador.frequenciaProcessador} ${this.processador.nucleosProcessador}`,
    )

    console.log(
      `Inicializando o dispositivo de armazenamento ${this.quantidadeArmazenamento}`,
    )

    console.log(`Inicializando Memória RAM ${this.mostrarRAMTotal()}GB`)

    console.log(`Inicializando a BIOS ${this.bios}`)

    this.carregarSistemaOperacional()

    console.log('Seu computador está pronto para uso')
  }

  desligar() {
    console.log('Método não implementado')
  }

  carregarSistemaOperacional() {
    console.log(
      `Inicializando o Sistema Operacional ${this.sistemaOperacional}`,
    )
  }

  instalarPrograma(programa: string) {
    console.log('Método não implementado')
  }

  abrirPrograma(programa: string) {
    console.log('Método não implementado')
  }

  desinstalarPrograma(programa: string) {
    console.log('Método não implementado')
  }
}
