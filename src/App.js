import {FiSearch} from 'react-icons/fi'
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="input-container">
        <input 
        type="text"
        placeholder="Entre com um CEP..."
        />
        <button className="finder-btn">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 799999999999</h2>
        <span>Rua s</span>
        <span>complemento: shhagkjgcljsh</span>
        <span>jockey</span>
        <span>Campos dos Goytacazes - RJ</span>
      </main>
    </div>
  );
}

export default App;