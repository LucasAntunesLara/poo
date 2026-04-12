"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sistemaLogin_1 = require("./sistemaLogin");
const sistemaLogin = new sistemaLogin_1.SistemaLogin();
sistemaLogin.criarUsuario('Lucas', 'lucasantuneslara@06gmail.com', '123123');
sistemaLogin.criarUsuario('Ace Frehley', 'ace@kiss.com', '123123');
console.log(sistemaLogin.login('', '123123'));
console.log(sistemaLogin.login('lucasantuneslara@06gmail.com', ''));
console.log(sistemaLogin.login('lucasantuneslara@06gmail.com', '123123'));
// const showUser = () => {
//   console.log('\n')
//   console.log('----------------')
//   console.log(user.nome)
//   console.log(user.email)
//   console.log(user.senha)
//   console.log('----------------')
//   console.log('\n')
// }
// showUser()
// console.log(
//   user.verificarLogin(user.email, user.senha)
//     ? 'Login bem-sucedido!'
//     : 'Não foi possível completar o login.',
// )
// user.nome = 'Lucas Antunes'
// user.email = 'lucas.lara@bento.ifrs.edu.br'
// user.senha = 'Inter'
// showUser()
// user.recuperarSenha(user.email)
//# sourceMappingURL=testes.js.map