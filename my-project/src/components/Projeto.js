import styles from "./Projeto.module.css"
import Banner  from "./Banner";
import Button from "./Button";

function Projeto({nome, dataInicio, dataFim, contratante, descricao }) {

    function showMore() {
        document.querySelector(".showMore").toggleAttribute("hidden")
    }


    nome = nome[0].toUpperCase() + nome.slice(1);
    const url = "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital-1.webp"
    return (
        <div className= {styles.projetoTitulo}>
            <Banner url={url} descricao="Logo do Programa"/>
            <h1 >{nome}</h1>
            <small>{dataInicio} até {dataFim}</small>
            <p>{descricao}</p>
            <p>Um projeto para <strong>{contratante}</strong></p>

            <Button event={showMore} text="Saiba mais..."/>
            <p className="showMore" hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, quam nec fermentum tincidunt, tortor justo lacinia nunc, vel bibendum justo ex id nunc. Nullam euismod, felis eget lacinia venenatis, odio libero tincidunt justo, vel tincidunt metus elit in nunc. Fusce euismod, justo vel tincidunt hendrerit, turpis libero aliquet justo, nec tincidunt justo libero a justo. Sed euismod, justo eu tincidunt hendrerit, justo libero aliquet justo, nec tincidunt justo libero a justo. Sed euismod, justo eu tincidunt hendrerit, justo libero aliquet justo, nec tincidunt justo libero a justo. </p>
        </div>
    )
}
export default Projeto;