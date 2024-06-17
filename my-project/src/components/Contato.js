import style from "./Contato.module.css"

function Contato() {
    function submit(e) {
        e.preventDefault()
        console.log("Mensagem Recebida!")
    }
    return (
        <>
        <h1>Fale conosco!</h1>
        <form className={style.formContato} onSubmit={submit} >
            <label>Email</label>
            <input type="email" placeholder="Digite seu melhor email"/>
            <label>Número de Contato</label>
            <input type="tel" placeholder="Digite seu telefone"/>
            <label>Sua mensagem</label>
            <textarea cols={50} rows={6}> Olá, gostaria de contatá-lo para um projeto de...</textarea>

            <input type="submit" value="Enviar Mensagem!" />
        </form>
        
        </>
    )
} 

export default Contato