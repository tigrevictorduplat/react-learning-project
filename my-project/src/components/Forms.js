import styles from "./Forms.module.css"
import {useState} from "react"

function Forms () {
    function fazerLogin(e){
        e.preventDefault()
        setStatus(true)
        console.log("Login: "+ login)
        console.log("Password: "+ password)

    }
const [login, setLogin] = useState()
const [password, setPassword] = useState()
const [userStatus, setStatus] = useState(false)


    return (
        <>
        <form className={styles.formsLogin} onSubmit={fazerLogin}>
        <div>
            <label htmlFor="login" >Login:</label>
            <input
            type="text"
            id = "login"
            name = "login"
            placeholder="Digite seu login de usuário..."
            onChange={(e) => setLogin(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Senha:</label>
            <input
            type="password"
            id = "password"
            name = "password"
            placeholder="Digite aqui sua senha..."
            onChange={(e) => setPassword(e.target.value) }
            />
        </div>
        <div>
            <input type="submit" value="Login"/>
        </div>
        </form>
        { userStatus && (
            <div className={styles.formsLogin}>
                <label htmlFor="comentario">Digite aqui seu comentário</label>
                <br/>
                <textarea id="comentario" name="comentario" cols={25} rows={6} >Olá, gostaria de fazer um projeto de...</textarea>
            </div>
        )
        }
        </>
    )
}

export default Forms