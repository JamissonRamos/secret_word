
//Css
import './App.css'

//Hocks
import { useState  } from 'react' //useCallback, useEffect

//Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import StartScreen from './components/content/start_screen/StartScreen'
import Gamer from './components/content/gamer/Gamer'
import GamerOver from './components/content/gamer_over/GamerOver'
import {wordList} from "./data/data"
import { MdCategory } from 'react-icons/md'

const stage = [

  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {

  const [gameStage, setGameStage] = useState(stage[0].name) //setGameStage
  const [words] = useState(wordList)
  const [pickeWord, setPickeWord] = useState("")
  const [pickeCategory, setPickeCategory] = useState("")
  const [pickeLetters, setPickeLetters] = useState([])

  
//Funções da aplicação 

const pickeWordAndCategory = () => {

  const categories = Object.keys(words)

  const categoy = categories[Math.floor(Math.random() * Object.keys(categories).length)]
  
  //Caso seja uma categoria com 2 ou mais letras fazer separação das palavras exm: jogoTabuleiro
  let novaCategory = categoy

  if (/[A-Z]/.test(novaCategory))
  {
    novaCategory = novaCategory.replace(/([A-Z])/g, ' $1');
  }

  //Pegar uma palavra da cetegoria
  const word = words[categoy][Math.floor(Math.random() * words[categoy].length)]
  
  return {novaCategory, word}
}

//Iniciando o Gamer, Estdo inicial da aplicação
const startGamer = () => {

  //Pegar uma categoria e uma palavra da cetgoria selecionada
  const {novaCategory, word} = pickeWordAndCategory()

  //Criando um array com as letras da palavra selecionada
  let wordLetters = word.split("")
  //Passando todas as letras para minusculas

  console.log(wordLetters)
  wordLetters = wordLetters.map((l) => l.toLowerCase())

  console.log(novaCategory, word)
  console.log(wordLetters)

  setPickeWord(word) 
  setPickeCategory(novaCategory) 
  setPickeLetters(wordLetters)

  setGameStage(stage[1].name)

}

//Processando  as letras na aplicação
const verifyLatter = () => {

    setGameStage(stage[2].name)
}

//Reiniciando o jogo
const retry = () => {

  setGameStage(stage[0].name)
}



  return (

    <div className='App'>

      <Header />

      {gameStage === "start" &&  <StartScreen startGamer={startGamer} />}
      {gameStage === "game" &&  <Gamer verifyLatter={verifyLatter} />}
      {gameStage === "end" &&  <GamerOver retry={retry} />}
      
      <Footer />

    </div>
  )
}

export default App
