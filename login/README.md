# Exercício Login - Aula 06/04/2026

Desenvolver um sistema de login para um site. O sistema deve permitir que os usuários se registrem, façam login e recuperem suas senhas caso se esqueçam. Existem dois tipos de usuários: Usuários padrão e Administradores. O sistema também deve permitir o login, a criação de novos usuários, a recuperação de senha e exibir mensagens apropriadas em caso de falhas.
A estrutura do sistema deverá ser desenvolvida conforme segue abaixo:

## 1. Crie uma classe Usuario (classe base) com a seguinte estrutura:

### Atributos privados:

- nome (String)
- email (String)
- senha (String)

### Métodos públicos:

- getNome(): Retorna o nome do usuário.
- setNome(nome: String): Altera o nome do usuário.
- getEmail(): Retorna o email do usuário.
- setEmail(email: String): Altera o email do usuário.
- getSenha(): Retorna a senha do usuário.
- getSenha(senha: String): Altera a senha do usuário.
- verificarLogin(email: String, senha: String): Verifica se o email e a senha informados são válidos. Retorna true se o login for bem-sucedido e false caso contrário.
- recuperarSenha(email: String): Método para recuperar a senha do usuário. Simula o envio de um link para recuperação de senha.
- validarEmail(email:String): Método privado que verifica se o e-mail foi informado em um formato correto, ou seja, "usuario@dominio.com.br". Este método deverá ser utilizado no método setEmail, verificarLogin e recuperarSenha.

## 2. Crie uma classe Administrador que herda da classe Usuario com a seguinte estrutura:

### Atributos adicionais:

- nivelAcesso (Inteiro) - Pode ser 1 para Administrador padrão e 2 para Administrador com privilégios avançados.

### Métodos adicionais:

- getNivelAcesso(): Retorna o nível de acesso do administrador.
- setNivelAcesso(nivel: Inteiro): Altera o nível de acesso do administrador.
- Sobrescreva o método verificarLogin() para permitir que um administrador tenha um login mais seguro, como comparação com uma senha hash.
- Sobrescreva o método recuperarSenha() para simular um processo de recuperação de senha mais seguro para administradores.

## 3. Crie uma classe SistemaLogin com a seguinte estrutura:

### Atributos privados:

- usuarios (Lista de objetos Usuario) - Para armazenar os usuários registrados.

### Métodos públicos:

- criarUsuario(nome: String, email: String, senha: String): Método que cria um novo usuário e adiciona à lista de usuários.
- login(email: String, senha: String): Método para realizar o login. Verifica as credenciais de um usuário registrado e exibe uma mensagem de sucesso ou erro.
- recuperarSenha(email: String): Método para solicitar a recuperação de senha para um usuário. Exibe uma mensagem de sucesso ou erro dependendo se o email existe.

## 4. Criar os objetos necessários para testar os métodos das classes Usuario, Administrador e SistemaLogin.
