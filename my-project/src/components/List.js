function List({titulo, itens}){
    return (
        <>
        <h2>{titulo}</h2>
        <ul>
        {itens.length > 0 ? (
            itens.map((item, index) => <li key={index}>{item}</li>)):(
                <li> Não há itens na lista... </li>
            )
        }
        </ul>
        </>
    )
}
export default List