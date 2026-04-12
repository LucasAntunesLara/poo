import {SistemaLogin} from './sistemaLogin'

function testarSistema() {
  console.log('🚀 INICIANDO TESTES DO SISTEMA DE LOGIN')
  console.log('='.repeat(60))

  const sistema = new SistemaLogin()

  console.log('\n📝 TESTE 1: Criando usuários comuns')
  console.log('-'.repeat(40))
  sistema.criarUsuario('João Silva', 'joao@email.com', 'senha123')
  sistema.criarUsuario('Maria Oliveira', 'maria@email.com', 'minhasenha')
  sistema.criarUsuario('Pedro Santos', 'pedro@email.com', '123456')

  console.log('\n⚠️ Testando email duplicado:')
  sistema.criarUsuario('João Duplicado', 'joao@email.com', 'outrasenha')

  console.log('\n📝 TESTE 2: Criando administradores')
  console.log('-'.repeat(40))
  sistema.criarUsuario('Carlos Admin', 'carlos@admin.com', 'admin123456', 2)
  sistema.criarUsuario('Ana SuperAdmin', 'ana@super.com', 'super12345678', 1)

  console.log('\n📝 TESTE 3: Testes de login - Cenários de SUCESSO')
  console.log('-'.repeat(40))
  sistema.login('joao@email.com', 'senha123')
  sistema.login('maria@email.com', 'minhasenha')
  sistema.login('carlos@admin.com', 'admin123456')
  sistema.login('ana@super.com', 'super12345678')

  console.log('\n📝 TESTE 4: Testes de login - Cenários de FALHA')
  console.log('-'.repeat(40))
  sistema.login('joao@email.com', 'senhaErrada')
  sistema.login('emailnaoexiste@teste.com', 'senha123')
  sistema.login('', 'senha123')
  sistema.login('joao@email.com', '')

  console.log('\n📝 TESTE 5: Testes de recuperação de senha')
  console.log('-'.repeat(40))

  console.log('\n🔹 Recuperação para usuário comum:')
  sistema.recuperarSenha('joao@email.com')

  console.log('\n🔹 Recuperação para administrador nível 2:')
  sistema.recuperarSenha('carlos@admin.com')

  console.log('\n🔹 Recuperação para super administrador nível 1:')
  sistema.recuperarSenha('ana@super.com')

  console.log('\n🔹 Tentativa de recuperação para email não cadastrado:')
  sistema.recuperarSenha('naoexiste@email.com')

  console.log('\n📝 TESTE 6: Teste de polimorfismo - Recuperação de senha')
  console.log('-'.repeat(40))
  console.log(
    'Demonstrando que cada tipo de usuário tem seu próprio comportamento:',
  )
  console.log('→ Usuário comum: recuperação simples')
  console.log('→ Administrador nível 2: recuperação com token')
  console.log('→ Super administrador nível 1: recuperação com 2FA')

  console.log('\n' + '='.repeat(60))
  console.log('✅ TESTES FINALIZADOS COM SUCESSO!')
  console.log('='.repeat(60))
}

testarSistema()
