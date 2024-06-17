import logo from './logo.svg';
import './App.css';
import Projeto from './components/Projeto';
import Contato from './components/Contato';

function App() {
let url01 = "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital-1.webp"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lets bora <code>codar</code> agora?
        </p>
      </header>
      <div className="Display-flex">
        <Projeto nome="meu primeiro projeto" dataInicio ="14/06/2024" dataFim="15/06/2024" contratante="Víctor D. Tigre" descricao="Um props com múltiplos atributos" urlBanner={url01} number ={1} />
        <Projeto nome="meu segundo projeto" dataInicio ="16/06/2024" dataFim="14/06/2024" contratante="Víctor D. Tigre" descricao="Outro props com múltiplos atributos" number={2}/>
      </div>
      <footer>
        <Contato/>
      </footer>
    </div>
  );
}

export default App;
