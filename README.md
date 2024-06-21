# Aprendendo React :
Esse projeto de teste serve para documentar minha evolução durante os próximos dias aprendendo sobre React.

A ideia é que este *README* seja ao mesmo tempo um log do meu progresso e um material para revisitar e ler minhas anotações.

## 14/06 - Conceitos Iniciais 📝
### O que é JSX ?
Começando a entender o que é o ***JSX*** uma forma de escrever **HTML** no **JS**.
Nos permitindo interpolar variáveis com o uso do ```{}```.

***Ex:***
```
<img href={urlImagem} alt={altText}/>
```
Nesse contexto acima, a url da imagem pode ser dinamicamente trocada assim como o seu texto alternativo.

Desse modo podemos trabalhar de forma simultânea com ambas linguagens.

### Aprendendo sobre Components e Props
Componentes são o grande diferencial do React. Partindo do entendimento que o próprio `App.js` é um Componente, é fácil de perceber qual a sua estrutura básica.
```
// Para um arquivo Exemplo.js
function Exemplo (){
    return(
        <div>
            ...
        </div>
    )
}

export default Exemplo

```
Assim, basta fazer um `import Exemplo from './components/Exemplo'` e nós teremos acesso a tudo dentro de exemplo, podendo chamá-lo como se fosse uma tag `<Exemplo/>` .

Propriedades (ou props) são um degrau mais fundo no uso de Componentes, onde somos capazes de dar atributos personalizados para eles.

```
    function Pessoa (props){
    return(
        <>
            <p>Eu sou uma pessoa e meu nome é {props.nome}</p>
        </>
    )
}
```
Na chamada do Componente `<Pessoa/>` deveremos passar seu nome como atributo
```
<Pessoa nome="João" />
```
Também é possível passar mais de uma propriedade:
```
function Pessoa (props){
    return(
        <>
            <p>Eu sou uma pessoa e meu nome é {props.nome} e minha idade é {props.idade}</p>
        </>
    )
}
```
Ou, passando um objeto com as propriedades solicitadas
```
function Pessoa ({nome, idade}){
    return(
        <>
            <p>Eu sou uma pessoa e meu nome é {nome} e minha idade é {idade}</p>
        </>
    )
}
```
### Módulos CSS
É possível, além da estilização global, fazer um Módulo CSS para estilizar um Componente específico.

![Exemplo Nome](./readme-src/cssmodules.png)

Desse modo, podemos aplicar animações e estilos específicos para um determinado componente.

Ex:
```
//Projeto.module.css

.projetoTitulo {
    padding: 2rem;
    background-color: black;
    color:  white;
}
```
Pode ser importado no Componente `Projeto.js` com a seguinte sintaxe

```
import styles from "./Projeto.module.css"
function Projeto() {
    return (
        <div className= {styles.projetoTitulo}>
        ...
        </div>
    )
}
```

## 16/06 - Avançando em Props⚙️
Às vezes, é uma boa prática definir o Tipo das Propriedades, seja para limitar a inserção de dados inapropriados ou para auxiliar na interpretação de futuros programadores que porventura leiam o código.

Essa definição pode ser feita através de: 
```
import PropTypes from 'prop-types'
```
E, após a definição do Componente (nesse caso ExemploString):
```
ExemploString.propTypes = {
    stringTest : PropTypes.string.isRequired,
```
O código acima, por exemplo, determina que a prop `stringText` deve ser do tipo *String* e que não pode ser omitida (`.isRequired`)

### Valores Default
Também é possível definir valores Padrão para as propriedades de um Componente. Desse modo podemos garantir que, mesmo sem inserir dados, a propriedade será preenchida.

| ⚠️ Definir um valor default torna o `.isRequired` obsoleto, uma vez que o valor nulo será preenchido pelo valor padrão ⚠️| 

Para implementar o valor default em uma propriedade, basta seguir o exemplo:
```
Banner.defaultProps = {
    url : "https://placehold.co/250"
}
```
## 19/06 - Eventos e o Hook useState ⚙️⚡
Assim como no JavaScript vanilla, lidamos bastante com Eventos no React, seja um `onClick` de um botão ou um `onSubmit` de um formulário ou um `onChange` de um input. Os eventos do React são os mesmos do DOM, a diferença está na forma de implementá-la.

No React, temos a possibilidade de definir um evento na própria tag/componente, como no exemplo:
```
function Button({event, text}) {
    return <button onClick={event}>{text}</button>
}
export default Button
```
Como podemos observar, o evento está na própria tag `<button>`, em um Componente de Botão. Uma outra característica interessante é que o evento desse botão está sendo passado como propriedade do componente. Assim, quando esse componente for instanciado terá em suas propriedades um espaço para receber um método:
```
<Button event={showMore} text="Saiba mais..."/>
```
### useState Hook 🎣
O useState é um hook do React que pode ser usado para definir Getters e Setters para uma variável e controlá-las de forma dinâmica. Basta importá-lo da biblioteca `'react'` e definir o useState para uma variável, como pode ser visto à seguir:

```
import {useState} from 'react'
```
Agora definimos um useState para a senha:
```
const [nome, setNome] = useState()
```
E agora podemos usar o setNome, num input por exemplo:
```
 <input
    type="text"
    id = "nome"
    name = "nome"
    placeholder="Digite seu nome aqui..."
    onChange={(e) => setNome(e.target.value)}
 />

```
E mostrá-lo de forma dinâmica:
```
<p>Olá {nome}, tudo bem?</p>
```
## 20/06 - Renderização Condicional, Renderização de Listas e State Lift 🤔 📝 🔼
Usando o useState ou não, é possível usar um pouco de lógica para exibir conteúdos à depender de uma certa condição. Seja uma barra de navegação personalizada para Usuários Logados, um pop-up que deve aparecer quando um determinado evento acontece, etc. Pode ser feito com `if else` ou de forma *inline*:

```
{ userStatus && (
            <div className={styles.formsLogin}>
                <p>Esse parágrafo é condicional</p>
            </div>
        )
}
```

Na prática estamos verificando se o `userStatus` é verdadeiro, sendo verdadeiro a expressão ao lado também será e, portanto, será exibida.

### Renderização de Listas 
Outra prática comum no React é a de imprimir/renderizar Listas. Sejam Objetos, Elementos ou Componentes, é importante saber, essencialmente, como renderizá-las.

Uma forma simples de implementá-las é através de `arrays` e usando o `array.map`, como podemos ver no exemplo abaixo:
```
 <ul>
    {
    itens.map((item, index) => <li key={index}>{item}</li>)
    }
 </ul>
```

E aplicando os conhecimentos de Condicional, com `if else` inline:

```
 <ul>
        {itens.length > 0 ?
        (itens.map((item, index) => <li key={index}>{item}</li>))
        :
        (<li> Não há itens na lista... </li>)
        }
        </ul>
```
Desse modo podemos renderizar uma lista apenas quando tiver elementos ou até renderizar listas diferentes.

### State Lift ☁️
O State Lift é uma técnica que consiste na centralização do useState em um Componente Pai, de forma que seja possível manipulá-lo nos componentes filhos, passando as variáveis para eles na forma de propriedade. Desse modo, podemos controlar quem tem acesso à visualização dele e quem pode defini-lo:
```
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
```
Como pôde ser visto no exemplo, pudemos definir de forma dinâmica o input `<LiveEditor/>` e o output `<LiveDisplay/>` no componente pai `MiniNotion`.

