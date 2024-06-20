function LiveEditor({setTitulo, setTexto}){
    return (
        <div>
        <p><strong>Titulo da Página:</strong></p>
        <input type="text" placeholder="Escreva o título aqui..."
        onChange={(e) => setTitulo(e.target.value) }
        />
        <p><strong>Conteúdo: </strong></p>
        <textarea cols={25} rows={10} placeholder="Escreva o conteúdo da sua página..."
        onChange={(e) => setTexto(e.target.value) }
        />
        </div>
    )
}

export default LiveEditor