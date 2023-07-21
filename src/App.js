import {FiSearch} from 'react-icons/fi'
import { useState } from 'react';
import './style.css';
import api from './services/api';

function App() {

  const [input, setinput] = useState('');
  const [cep, setcep] = useState({});

  const handleSearch = async () => {
    if(input === ''){
      alert('Insira um CEP!')
      return
    }
    try{
      const response = await api.get(`${input}/json/`)
      setcep(response.data)
      setinput('')
    }catch{
      alert('CEP não encontrado!')
      setinput('')
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="input-container">
        <input 
        type="text"
        placeholder="Entre com um CEP..."
        value={input}
        onChange={(e) => setinput(e.target.value)}
        />
        <button className="finder-btn" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;