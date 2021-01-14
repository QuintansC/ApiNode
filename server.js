const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ nome: 'Gustavinho', idade: '16', message:'Gustavinho que enviou' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));