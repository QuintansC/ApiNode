import React, { useState } from 'react';
import Api from './API/api';

function App () {
  //Implementação do metodo post de requisição da api
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  

  async function login(){
    setUser('Gustavo');
    setPassword('123456')
    const response = await Api.post('/api/login', { user: user, password: password });
    setMessage(response.data.message)
  }

  //As duas rotas poderiam ser as mesmas com metodos de semantica diferentes 
  //EX: fetch('/api/mensagem'); fetch('/api/mensagem', requestOptions);;
  return (
    <div className="App">
      <p> Mensagem: {message} </p> 
      <button onClick={() =>login()}> Infos </button>
    </div>
  );
}

export default App;