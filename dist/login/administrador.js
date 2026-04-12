"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const usuario_1 = require("./usuario");
class Administrador extends usuario_1.Usuario {
    _nivelAcesso;
    constructor(nome, email, senha, nivelAcesso) {
        super(nome, email, senha);
        this._nivelAcesso = nivelAcesso;
    }
    get nivelAcesso_1() {
        return this._nivelAcesso;
    }
    set nivelAcesso_1(value) {
        this._nivelAcesso = value;
    }
    recuperarSenha(email) {
        if (!this.validarEmail(email)) {
            console.log('❌ Formato de email inválido.');
            return;
        }
        if (email !== this.email) {
            console.log('❌ Email não corresponde ao cadastro do administrador.');
            return;
        }
        switch (this._nivelAcesso) {
            case 1:
                console.log('📧 Gerando token seguro de recuperação de senha...');
                const token = this.gerarTokenSeguro();
                console.log(`✅ Token gerado: ${token}`);
                console.log(`🔗 Link de recuperação: https://sistema.com/recuperar?token=${token}`);
                console.log(`📧 Token enviado para ${this.email}`);
                console.log('⏰ Token expira em 15 minutos.');
                break;
            case 2:
                console.log('📱 Enviando código de verificação para seu email e telefone cadastrados...');
                console.log('✅ Código de verificação enviado. Validade: 10 minutos.');
                console.log(`📧 Confirmação enviada para ${this.email}`);
                console.log('⚠️ Para redefinir sua senha, acesse o link enviado e insira o código de verificação.');
                break;
            default:
                console.log('❌ Nível de acesso não reconhecido.');
        }
        // Log de auditoria (simulado)
        // this.registrarTentativaRecuperacao(email)
    }
    gerarTokenSeguro() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 32; i++)
            token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        return token;
    }
}
exports.Administrador = Administrador;
//# sourceMappingURL=administrador.js.map