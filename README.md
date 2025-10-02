## 1. Objetivo do Projeto

Este projeto consiste em uma suíte de testes de automação para a API REST do sistema bancário, disponível no repositório [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api).

O principal objetivo é contribuir com a qualidade e a estabilidade dos **endpoints** da API, verificando o correto funcionamento das operações de criação, leitura, atualização e exclusão (CRUD), bem como cenários de autenticação e validação de dados.

## 2. Stack Tecnológica

O projeto é desenvolvido em **JavaScript** e utiliza um conjunto de bibliotecas Node.js amplamente reconhecidas para a automação de testes de API.

| Tecnologia | Descrição |
| :--- | :--- |
| **JavaScript (Node.js)** | Linguagem de programação para execução dos testes. |
| **Mocha** | Framework de testes flexível, utilizado para estruturar os blocos de testes (`describe`, `it`). |
| **Supertest** | Biblioteca para fazer asserções HTTP de alto nível, facilitando o envio de requisições para a API. |
| **Chai** | Biblioteca de asserção para verificar e validar os resultados esperados nos testes. |
| **Mochawesome** | Reporter que gera relatórios de teste em formato HTML, visualmente agradáveis e informativos. |

As dependências completas do projeto estão listadas no arquivo `package.json`.

## 3. Estrutura de Diretórios

A estrutura de pastas e arquivos reflete a organização do projeto de testes, separando dados de entrada (`fixtures`), funções utilitárias (`helpers`), e os próprios testes (`test`):

```

.
├── .env                 \# Variável de ambiente com a BASE\_URL (necessita ser criada)
├── .gitignore
├── fixtures/            \# Arquivos JSON com dados de teste (payloads, massas de teste)
│   ├── postLogin.json
│   └── postTransferencias.json
├── helpers/             \# Módulos com funções utilitárias e métodos de apoio
│   └── autenticacao.js  \# Exemplo de helper para obter token de autenticação
├── mochawesome-report/  \# Diretório para o relatório HTML (gerado automaticamente)
│   ├── assets
│   ├── mochawesome.html \# Relatório final de execução
│   └── mochawesome.json
├── node\_modules/        \# Dependências do projeto (ignorada pelo Git)
├── package-lock.json
├── package.json
└── test/                \# Suíte principal de testes
├── login.test.js    \# Testes para o endpoint de Login
└── transferencia.test.js \# Testes para o endpoint de Transferências

```

## 4. Configuração da URL Base (`.env`)

Para que os testes possam se comunicar com a API corretamente, é necessário definir a URL base da aplicação em uma variável de ambiente.

Crie um arquivo chamado **`.env`** na raiz do projeto com a seguinte variável:

```

# .env

# Defina o endereço da API que será testada.

BASE\_URL=http://localhost:3000

````

> **Nota:** Certifique-se de que a API de destino esteja em execução no endereço configurado antes de iniciar os testes.

## 5. Execução dos Testes e Relatórios

Siga os passos abaixo para instalar as dependências e executar a suíte de testes.

### 1. Instalação das Dependências

Abra o terminal na raiz do projeto e execute o comando:

```bash
npm install
````

### 2\. Execução dos Testes

O comando a seguir executa todos os testes presentes no diretório `test/` e, simultaneamente, gera o relatório HTML usando o Mochawesome.

```bash
npm test
```

### 3\. Visualização do Relatório

Após a execução dos testes, o relatório interativo em HTML será gerado e salvo no diretório `mochawesome-report/`.

Para visualizar o resultado, localize e abra o arquivo:

```
mochawesome-report/mochawesome.html
```

Basta abrir este arquivo em qualquer navegador web.

## 6. Documentação das Dependências

Para aprender mais sobre as ferramentas utilizadas no projeto, consulte a documentação oficial:

| Dependência | Documentação |
| :--- | :--- |
| **Mocha** | [mochajs.org](https://mochajs.org/) |
| **Supertest** | [GitHub - ladjs/supertest](https://github.com/ladjs/supertest) |
| **Chai** | [chaijs.com](https://www.chaijs.com/) |

```
```
