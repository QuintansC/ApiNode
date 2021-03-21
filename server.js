const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

//Rota get, rota menos segura porém mais agil pra carregar, ou seja custa menos processamento
app.get('/api/mensagem', (req, res) => {
  res.send({ nome: 'Gustavo', idade: '18', message:'Gustavo esta enviando esssa mensagem' });
});
//Rota post, rota mais segura porém demora alguns milesimos a mais pra carregar, ou seja custa mais processamento
app.post('/api/mensagem', (req, res) => {
  res.send({ sobrenome: 'Almeida', idade: '12', message:'Pedro enviou uma maçã' });
});

//Rota post, rota mais segura porém demora alguns milesimos a mais pra carregar, ou seja custa mais processamento
app.post('/api/mensagem1', (req, res) => {
  res.send({ nome: 'Pedro', idade: '23', message:'Pedro enviou um relatorio' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));