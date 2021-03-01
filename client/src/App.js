import React, {useState} from 'react';

function App () {
  //Estados da Rota Get
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [message, setMessage] = useState();

  //Estados da rota Post
  const [sobrenome, setSobrenome] = useState();
  const [idade2, setIdade2] = useState();
  const [message2, setMessage2] = useState();

  //Estados da rota Post
  const [nome1, setNome1] = useState();
  const [idade1, setIdade1] = useState();
  const [message1, setMessage1] = useState();

  //Função que executa a rota Get
  async function chama(){
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
  
    setNome(body.nome);
    setIdade(body.idade);
    setMessage(body.message);
  };

  //Implementação do metodo post de requisição da api
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};

async function sobre(){
  const response = await fetch('/api/mensagem', requestOptions);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  setSobrenome(body.sobrenome);
  setIdade2(body.idade);
  setMessage2(body.message);
};
  //Função que executa a rota Post
  async function chama1(){
    const response = await fetch('/api/mensagem1', requestOptions);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
  
    setNome1(body.nome);
    setIdade1(body.idade);
    setMessage1(body.message);
  };

  //Executando a rotas
  chama();//rota get
  sobre();
  chama1();// diferente rota post

  //As duas rotas poderiam ser as mesmas com metodos de semantica diferentes 
  //EX: fetch('/api/mensagem'); fetch('/api/mensagem', requestOptions);;
  return (
    <div className="App">
      <h1>Rota Get + Rota Post</h1>
      {/*Exibindo a rota get*/}
      {/*Os parametros das duas rotas podem ser diferentes pois há duas rotas para a mesma rota basicamente, a rota Post com seus parametros
      e a rota Get com seus parametros que podem ser totalmente diferentes e numericamente diferentes */}
      <p className="App-intro">Nome: {nome}// Sobrenome: {sobrenome}</p>{/*implementando a rota Post junto a get do mesmo caminho */}
      <p className="App-intro">Idade: {idade}// Idade2 :{idade2}</p>
      <p className="App-intro">Message: {message}// Message2: {message2}</p>
      
    <br></br>

      <h1>Rota Post apenas</h1>
      {/*Exibindo a rota post*/}
      <p className="App-intro">Nome: {nome1}</p>
      <p className="App-intro">Idade: {idade1}</p>
      <p className="App-intro">Message: {message1}</p>
    </div>
  );
}

export default App;