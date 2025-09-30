const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()

describe('Login', () => {
    describe('POST /login', () => { //mocha: estruturar e executar o teste
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const resposta = await request(process.env.BASE_URL)//Supertest - fazer requisições a API
                .post('/login')
                .set('Content-Type', 'application/json')//como seto o cabeçalho para essa requisição
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                }) 
            // Chai - fazer asserções, validar comparações, o que tive de resposta e o valor que esperava.    
            expect(resposta.status).to.equal(200);        
            expect(resposta.body.token).to.be.a('string');                
        })
    })
})