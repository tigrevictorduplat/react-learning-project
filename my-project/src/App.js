import logo from './logo.svg';
import './App.css';
import Projeto from './components/Projeto';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lets bora <code>codar</code> agora?
        </p>
      </header>
      <Projeto nome="meu primeiro projeto" dataInicio ="14/06/2024" dataFim="15/06/2024" contratante="Víctor D. Tigre" descricao="Um props com múltiplos atributos"/>
      <Forms/>
    </div>
  );
}

export default App;
