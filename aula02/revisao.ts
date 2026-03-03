import { Personagem } from "./personagem";

let personagem1 = new Personagem();

personagem1.nome = "Gandalf";
personagem1.numeroVidas = 5;
personagem1.nivel = "Avançado";

personagem1.atacar();
personagem1.receberDano(3);
personagem1.recuperarPontosVida(2);

console.log("\n");

let personagem2 = new Personagem();

personagem2.nome = "Legolas";
personagem2.numeroVidas = 5;
personagem2.nivel = "Intermediário";

personagem2.atacar();
personagem2.receberDano(2);
personagem2.recuperarPontosVida(1);
