import nodemailer from 'nodemailer'

export class Email {
  private transporter: nodemailer.Transporter

  constructor() {
    // Configuração do transporter com Gmail
    // Para usar com Gmail, é necessário gerar uma senha de app em:
    // https://myaccount.google.com/apppasswords
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'seu_email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'sua_senha_de_app',
      },
    })
  }

  public async enviarMensagem(
    para: string,
    assunto: string,
    mensagem: string,
  ): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_USER || 'seu_email@gmail.com',
        to: para,
        subject: assunto,
        html: mensagem,
      })

      console.log(`✅ E-mail enviado com sucesso para ${para}`)
      console.log(`ID da mensagem: ${info.messageId}`)
    } catch (error) {
      console.error(`❌ Erro ao enviar e-mail para ${para}:`, error)
      throw new Error(`Falha ao enviar e-mail: ${error}`)
    }
  }
}
