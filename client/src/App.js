import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [message, setMessage] = useState();

  async function chama(){
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
  
    setNome(body.nome);
    setIdade(body.idade);
    setMessage(body.message);
  };

  chama();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">Nome: {nome}</p>
      <p className="App-intro">Idade: {idade}</p>
      <p className="App-intro">Message: {message}</p>
    </div>
  );
}

export default App;