function PopUp ({number}) {
    let popup = `popup${number}`

    function popUpText(){
        
        let popText = document.querySelector(`.${popup}`)
        popText.toggleAttribute("hidden")
    }
        
    return(
        <>
        <button onClick={popUpText}> Clique Aqui! </button>
        <p className={popup} hidden>Texto PopUp</p>
        </>
    )
}

export default PopUp