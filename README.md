# Vaga Vórtx FullStack

Teste  - Show me the code

Author: Gustavo dos Santos Quintans.
Especialidade: Backend.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/), Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Instalação

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd TesteVTX

# Instale as dependências
$ yarn

# Execute o arquivo de servidor[Server.js]
$ yarn start
## Ou
$ node server.js

# Acesse a pasta de front-end
$ cd client

# Execute o projeto front-end
$ yarn start

# O servidor inciará na porta:5000 - acesse <http://localhost:5000> e a aplicação front-end porta:3000 -  acesse <http://localhost:3000>
```

### Testes 

```bash
  # Acesse a raiz do projeto no terminal/cmd
  $ cd TesteVTX

  # Verifique caso a pasta node_modules ja exista ná raiz, caso não:
  $ yarn 

  # Caso contrario execute diretamente os testes
  $ jest 
  ## Ou
  $ test
```
## Detalhes da aplicação  

### '__test__'

Todos os testes unitarios são feitos em um unico arquivo chamado `calcula.test.js` onde ele testa, a rota e o metodo que calcula os acrecimos adicionais ao valor


### Src

Todos os arquivos de servidor estão dentro da pasta src na raiz do projeto, com exeção do server.js para facilitar na inicialização do projeto.
<br>

### Client

A pasta client é referente aos arquivos necessarios para uma aplicação React completa.
Dentro dessa pasta há também uma pasta chamada src, é onde estão os arquivos referentes as telas e consumo da api, incluindo também os estilos e as imagens utilizadas.
