import { useState } from 'react';

function App() {
  // State - estado
  const [message, setMessage] = useState();
  //só posso colocar um elemento. Ou seja, não posso retornar div.
  return (
    <div>Olá mundo

      <h1>{message}</h1> 

      <button OnClick ={() =>
        setMessage('Olá, seja bem vindo!')
      }
      >
        Mudar mensagem
      </button>
    </div>
  );

}

export default App;