import './App.css';
import Projeto from './components/Projeto';
import Forms from './components/Forms';
import MiniNotion from './components/mininotion/MiniNotion';

function App() {
  return (
    <div className="App">
      <Projeto nome="meu primeiro projeto" dataInicio ="14/06/2024" dataFim="15/06/2024" contratante="Víctor D. Tigre" descricao="Um props com múltiplos atributos"/>
      <Forms/>
      <MiniNotion/>
    </div>
  );
}

export default App;
