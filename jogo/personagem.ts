// Uma empresa está desenvolvendo um jogo de aventura.

// No jogo, cada personagem contém um nome, um número X de vidas e um nível que pode ser básico, intermediário e avançado. Os personagem também podem atacar, receber dano (reduz os pontos de vida) e usar poção para recuperar pontos de vida.

// 1 - Crie a classe Personagem, aplicando corretamente os conceitos de classe, atributos e métodos.

// 2 - Crie dois objetos utilizando a classe Personagem.

export class Personagem {
  nome: string = "";
  numeroVidas: number = 5;
  nivel: "Baixo" | "Intermediário" | "Avançado" = "Intermediário";

  atacar() {
    console.log("Ataque realizado");
  }

  receberDano(reducaoPontosDeVida: number) {
    this.numeroVidas -= reducaoPontosDeVida;

    console.log(
      `Dano recebido! ${this.nome}, sua vida agora é ${this.numeroVidas}!`,
    );
  }

  recuperarPontosVida(recuperacaoPontosVida: number) {
    console.log("Recuperando vida...");

    this.numeroVidas += recuperacaoPontosVida;

    console.log(
      `Vida recuperada! ${this.nome}, sua vida agora é ${this.numeroVidas}!`,
    );
  }
}
