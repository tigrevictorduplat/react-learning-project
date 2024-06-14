import styles from "./Projeto.module.css"
import Banner  from "./Banner";

function Projeto({nome, dataInicio, dataFim, contratante, descricao }) {
    nome = nome[0].toUpperCase() + nome.slice(1);
    const url = "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital-1.webp"
    return (
        <div className= {styles.projetoTitulo}>
            <Banner url={url} descricao="Logo do Programa"/>
            <h1 >{nome}</h1>
            <small>{dataInicio} até {dataFim}</small>
            <p>{descricao}</p>
            <p>Um projeto para <strong>{contratante}</strong></p>
        </div>
    )
}
export default Projeto;