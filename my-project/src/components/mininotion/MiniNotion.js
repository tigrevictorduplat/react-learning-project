import { useState } from "react"
import LiveDisplay from "./LiveDisplay"
import LiveEditor from "./LiveEditor"

function MiniNotion(){
    const [titulo, setTitulo] = useState()
    const [mainText, setMainText] = useState()

    return (
        <div>
            <LiveDisplay titulo={titulo} texto={mainText}/>
            <LiveEditor setTitulo={setTitulo} setTexto={setMainText}/>
        </div>
    )
}

export default MiniNotion