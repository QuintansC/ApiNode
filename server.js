//Usa a biblioteca de criptografia padrão do node
const crypto = require('crypto');
//Conecta com o cliente do mongo
const MongoClient = require('mongodb').MongoClient;
//Define o caminho de acesso 
const uri = "mongodb+srv://kanbanUser:6mCHcp8BVmjZUTbj@cluster0.yk91m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//Cria o cliente ja com a conexão
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//Define o protocolo de comunicação
var http = require('http');
//Utiliza o express para trabalhar com as rotas 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(require('cors')());

var server = http.createServer(app);
server.listen(port, () => console.log(`Escutando a porta ${port}`));

//Colocar em typescript
//Adicionar JWT

//Rota de login
app.post('/api/login', (req, res, next) => {
  //Rota de conexão para efetuar o login
  client.connect(async err => {
    const collection = client.db("kanban").collection("login");
    const query = await collection.find({user: req.body.user}).toArray();
    if(query[0] !== undefined){
      if(req.body.user === query[0].user && req.body.password === query[0].password){
        //Inicio JWT
        const header = JSON.stringify({
          'alg': 'HS256',
          'typ': 'JWT'
        });
  
        const payload = JSON.stringify({
          'email': req.body.user,
          'password': req.body.password
        });
  
        const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '');
        const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');
        const secret = 'hash-criptografada';
    
        const data = base64Header + '.' + base64Payload;
    
        const signature = crypto
            .createHmac('sha256', secret)
            .update(data)
            .digest('base64');
    
        const signatureUrl = signature
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '')
        //fim do JWT
        res.status(202).json({
          token: signatureUrl,
        });
      }else{
        res.status(406).json({
          message: false,
        });
      }
    }else{
      res.status(401).json({
        message: 'Usuario não existe',
      });
    }
  });
});


app.post('/api/cadastrar', (req, res, next) => {
  //Rota de conexão para efetuar o cadastro
  client.connect(async err => {
    const collection = client.db("kanban").collection("login");
    const query = await collection.find({user: req.body.user}).toArray();
    const queryEmail = await collection.find({email: req.body.email}).toArray();
    if(query[0] === undefined && queryEmail[0] === undefined){
      if(req.body.user !== '' && req.body.password !== '' && req.body.email !== ''){
        // perform actions on the collection object
        collection.insertOne({
          email: req.body.email,
          user: req.body.user,
          password: req.body.password
        })
        res.status(201).json({
          message: 'Cadastrado com sucesso!',
        });
        
      }else{
        res.status(406).json({
          message: 'Campos vazios nao sao permitidos',
        });
      }
    }
    else{
      res.status(401).json({
        message: "Usuario ja existente",
      })
    }
  });
});