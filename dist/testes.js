"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
const user = new usuario_1.Usuario('Lucas', 'lucasantruneslara06@gmail.com', '123123');
console.log(user.verificarLogin(user.email, user.senha));
//# sourceMappingURL=testes.js.map