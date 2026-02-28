// Definir classe
export class Computador {
  // Atributos - Características
  quantidadeMemoriaRam: number = 0
  placaMae: string = ''
  marcaProcessador: string = ''
  nucleosProcessador: number = 0
  frequenciaProcessador: number = 0
  qtdArmazenamento: number = 0
  bios: string = ''
  sistemaOperacional: string = ''
  programasInstalados: string[] = []
  // Métodos - Funções ou comportamentos
  ligar() {
    console.log('Ligando o computador...')

    console.log('Inicializando a placa mãe' + this.placaMae)

    console.log(
      `Inicializando processador ${this.marcaProcessador} ${this.frequenciaProcessador} ${this.nucleosProcessador}`,
    )

    console.log(
      `Inicializando o dispositivo de armazenamento ${this.qtdArmazenamento}`,
    )

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
