export class Processador {
  marcaProcessador: string
  nucleosProcessador: number
  frequenciaProcessador: number

  constructor(
    marcaProcessador: string,
    nucleosProcessador: number,
    frequenciaProcessador: number,
  ) {
    this.marcaProcessador = marcaProcessador
    this.nucleosProcessador = nucleosProcessador
    this.frequenciaProcessador = frequenciaProcessador
  }
}
