# Programação Orientada a Objetos

Repositório da disciplina **Programação Orientada a Objetos** - 3º Semestre do Curso de **Análise e Desenvolvimento de Sistemas** do **IFRS _Campus_ Bento Gonçalves**.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem superset de JavaScript com tipagem estática
- **JavaScript**: Linguagem de execução dos projetos
- **Node.js**: Runtime para executar código JavaScript fora do navegador
- **npm**: Gerenciador de pacotes

## Pré-requisitos

- **Node.js** (v14 ou superior) - [Download](https://nodejs.org/)
- **npm** (incluído com Node.js)

## Instalação

1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto:

```sh
cd poo
```

3. Instale as dependências do projeto:

```sh
npm install
```

## Como Trabalhar com TypeScript

### Instalação do TypeScript

Caso queira instalá-lo apenas localmente:

```sh
npm install typescript --save-dev
```

Senão, é possível realizar a instalação de forma global:

```sh
npm install -g typescript
```

### Transpilar TypeScript para JavaScript

Para compilar um arquivo TypeScript específico para JavaScript:

```sh
npx tsc nomeDoSeuArquivo.ts
```

Para compilar todos os arquivos TypeScript conforme configurado em `tsconfig.json`:

```sh
npx tsc
```

Para compilar em modo watch (recompila automaticamente ao detectar mudanças):

```sh
npx tsc --watch
```

**_OBS_**: Se você tem o TypeScript instalado globalmente na sua máquina, não é necessário usar o `npx`.

## Como Executar os Projetos

### Executar um arquivo JavaScript específico

À partir da pasta do projeto:

```sh
node nomeDoSeuArquivo.js
```

Exemplo - Executar o teste do sistema de pedidos:

```sh
node pedidos/testePedidos.js
```

### Fluxo Típico de Desenvolvimento

1. Edite o arquivo `.ts` (TypeScript) com sua implementação
2. Compile o TypeScript para JavaScript usando `npx tsc`
3. Execute o arquivo `.js` gerado com `node nomeDoSeuArquivo.js`

Exemplo completo:

```sh
# Editar arquivo
code computador/computador.ts

# Compilar
npx tsc computador/computador.ts

# Executar
node computador/teste.js
```