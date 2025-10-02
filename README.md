# banco-api-tests

## Objetivo do Projeto

Este projeto consiste em uma suíte de testes de automação para a API REST do sistema bancário, disponível no repositório [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api).

O principal objetivo é contribuir com a qualidade e a estabilidade dos **endpoints** da API, verificando o correto funcionamento das operações de criação, leitura, atualização e exclusão (CRUD), bem como cenários de autenticação e validação de dados.

## Stack Tecnológica

O projeto é desenvolvido em **JavaScript** e utiliza um conjunto de bibliotecas Node.js amplamente reconhecidas para a automação de testes de API.

| Tecnologia | Descrição |
| :--- | :--- |
| **JavaScript (Node.js)** | Linguagem de programação para execução dos testes. |
| **Mocha** | Framework de testes flexível, utilizado para estruturar os blocos de testes (`describe`, `it`). |
| **Supertest** | Biblioteca para fazer asserções HTTP de alto nível, facilitando o envio de requisições para a API. |
| **Chai** | Biblioteca de asserção para verificar e validar os resultados esperados nos testes. |
| **Mochawesome** | Reporter que gera relatórios de teste em formato HTML, visualmente agradáveis e informativos. |

As dependências completas do projeto estão listadas no arquivo `package.json`.

## Estrutura de Diretórios

A estrutura de pastas e arquivos segue o padrão recomendado para projetos de automação de testes Node.js:

banco-api-tests/
├── test/                \# Arquivo de testes para o módulo Login/Autenticação
│   ├── login.test.js    
│   └── transferencias.test.js  
├── mochawesome-report/ 
├── .env                \# Arquivo para configuração da variável BASE_URL
├── .gitignore
├── package.json
└── README.md

```

## Configuração (Variáveis de Ambiente)

Para que os testes possam se conectar à API, é necessário configurar a URL base da aplicação.

Crie um arquivo chamado **`.env`** na raiz do projeto com o seguinte conteúdo:

```

# .env

# Variável obrigatória que define a URL base da API a ser testada.

# Exemplo: Se a API estiver rodando localmente na porta 3000, use http://localhost:3000

BASE\_URL=http://localhost:3000

````

> **Atenção:** Certifique-se de que a API alvo (`banco-api`) esteja em execução antes de rodar os testes.

## Execução dos Testes e Relatórios

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

Após a execução dos testes, o relatório interativo em HTML será gerado e salvo no diretório `reports/`.

Para visualizar o resultado, localize e abra o arquivo:

```
reports/mochawesome.html
```

Basta abrir este arquivo em qualquer navegador web.

## Documentação das Dependências

Para aprender mais sobre as ferramentas utilizadas no projeto, consulte a documentação oficial:

| Dependência | Documentação |
| :--- | :--- |
| **Mocha** | [mochajs.org](https://mochajs.org/) |
| **Supertest** | [GitHub - ladjs/supertest](https://github.com/ladjs/supertest) |
| **Chai** | [chaijs.com](https://www.chaijs.com/) |

```
```
