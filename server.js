var http = require('http'); 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(require('cors')());

var server = http.createServer(app);
server.listen(port, () => console.log(`Escutando a porta ${port}`));


//Rota de login
app.post('/api/login', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Login enviado com sucesso!'
  });
});
 
