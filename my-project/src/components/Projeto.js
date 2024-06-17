import styles from "./Projeto.module.css"
import Banner  from "./Banner";
import PopUp from './PopUp';

function Projeto({nome, dataInicio, dataFim, contratante, descricao, urlBanner, number}) {
    nome = nome[0].toUpperCase() + nome.slice(1);
    return (
        <div className= {styles.projetoTitulo}>
            <Banner url={urlBanner} descricao="Logo do Programa"/>
            <h1 >{nome}</h1>
            <small>{dataInicio} até {dataFim}</small>
            <p>{descricao}</p>
            <p>Um projeto para <strong>{contratante}</strong></p>
            <PopUp number={number}/>
        </div>
    )
}
export default Projeto;