const request = require('supertest');
const obterToken = async (usuario, senha) => {
    const respostaLogin = await request(process.env.BASE_URL)//Supertest - fazer requisições a API
        .post('/login')
        .set('Content-Type', 'application/json')//como seto o cabeçalho para essa requisição
        .send({
            'username': usuario,
            'senha': senha
        })
    return respostaLogin.body.token
}
module.exports = {
    obterToken
}
