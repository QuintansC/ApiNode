
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kanbanUser:25133795@cluster0.yk91m.mongodb.net/kanban?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var http = require('http'); 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(require('cors')());

var server = http.createServer(app);
server.listen(port, () => console.log(`Escutando a porta ${port}`));

//Colocar em typescript

//Rota de login
app.post('/api/login', (req, res, next) => {
  client.connect(async err => {
    const collection = client.db("kanban").collection("login");
    const query = await collection.find({user: req.body.user}).toArray();
    if(query[0] !== undefined){
      if(req.body.user === query[0].user && req.body.password === query[0].password){
        res.status(201).json({
          message: 'Login enviado com sucesso!',
        });
      }else{
        res.status(401).json({
          message: 'Login errado',
        });
      }
    }else{
      res.status(401).json({
        message: 'Usuario nao existe',
      });
    }
  });
});


app.post('/api/cadastrar', (req, res, next) => {
  client.connect(async err => {
    const collection = client.db("kanban").collection("login");
    const query = await collection.find({user: req.body.user}).toArray();
    if(query[0] === undefined){
      if(req.body.user !== '' && req.body.password !== ''){
        // perform actions on the collection object
        collection.insertOne({
          user: req.body.user,
          password: req.body.password
        })
        res.status(201).json({
          message: 'Cadastrado com sucesso!',
        });
      }else{
        res.status(401).json({
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
