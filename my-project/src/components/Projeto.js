import styles from "./Projeto.module.css"
import Banner  from "./Banner";
import Button from "./Button";
import List from "./List";

function Projeto({nome, dataInicio, dataFim, contratante, descricao }) {

    function showMore() {
        document.querySelector(".showMore").toggleAttribute("hidden")
    }

    nome = nome[0].toUpperCase() + nome.slice(1);
    const url = "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital-1.webp"

const minhaLista = ["Pesquisar sobre React","Aprender sobre React","Por o React em Prática"]
   // const minhaLista = []
    return (
        <div className= {styles.projetoTitulo}>
            <Banner url={url} descricao="Logo do Programa"/>
            <h1 >{nome}</h1>
            <small>{dataInicio} até {dataFim}</small>
            <p>{descricao}</p>
            <p>Um projeto para <strong>{contratante}</strong></p>

            <Button event={showMore} text="Saiba mais..."/>
            <div className="showMore" hidden><List titulo="Lista de Tarefas do Projeto" itens={minhaLista}/> </div>
        </div>
    )
}
export default Projeto;