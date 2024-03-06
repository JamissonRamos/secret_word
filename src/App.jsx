
//Css
import './App.css'

//Hocks
import { useEffect, useState, useCallback } from 'react' //useCallback, useEffect

//Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import StartScreen from './components/content/start_screen/StartScreen'
import Gamer from './components/content/gamer/Gamer'
import GamerOver from './components/content/gamer_over/GamerOver'
import {wordList} from "./data/data"
import MatchResult from './components/content/match_result/MatchResult'

const guessesQtd = 5

const stage = [

  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
  {id: 4, name: "result"}
]

function App() {

  const [gameStage, setGameStage] = useState(stage[0].name) //setGameStage
  const [words] = useState(wordList)
  const [pickeWord, setPickeWord] = useState("")
  const [pickeCategory, setPickeCategory] = useState("")
  const [pickeLetters, setPickeLetters] = useState([])
  const [guessesLetters, setGuessesLetters] = useState([]) //letras acertadas
  const [worongLetters, setWorongLetters] = useState([]) //Letras Erradas
  const [guesses, setGuesses] = useState(guessesQtd) //Total de chances 
  const [score, setScore] = useState(0) //Total de pontos 

  //Criando para atalizar aplicação diferente
  const [guessesWords, setGuessesWords] = useState([]) //Palvras que foi adivinhadas pelo user  
  
//Funções da aplicação 
const pickeWordAndCategory = useCallback(() => {
  
  let wordFound     = false // Criando var para habilitar o while
  let novaCategory  = ""    // Criando categoria da palavra
  let word          = ""    //Pegar uma palavra da cetegoria
    
  while (!wordFound) {

      const categories  = Object.keys(words) //Passando um array das categorias
      const category    = categories[Math.floor(Math.random() * Object.keys(categories).length)] // Selecionando uma categoria
    
      //Caso seja uma categoria com 2 ou mais palavras fazer separação das palavras exm: jogoTabuleiro
      novaCategory = category

      if (/[A-Z]/.test(novaCategory))
      {
        novaCategory = novaCategory.replace(/([A-Z])/g, ' $1');
      }

      //Pegar uma palavra da cetegoria
      word = words[category][Math.floor(Math.random() * words[category].length)]
      
      // Verificar se a palavra já foi selecionada
      if (!guessesWords.includes(word)) {
        wordFound = true
        break; // Sair do loop se a palavra estiver no array
      }
    }

    return {novaCategory, word}

},[words,guessesWords])

//Iniciando o Gamer, Estdo inicial da aplicação
const startGamer = useCallback(() => {

  clearLettersState()

  //Pegar uma categoria e uma palavra da cetgoria selecionada
  const {novaCategory, word} = pickeWordAndCategory()

  //Criando um array com as letras da palavra selecionada
  let wordLetters = word.split("")
  //Passando todas as letras para minusculas

  wordLetters = wordLetters.map((l) => l.toLowerCase())

  setPickeWord(word) 
  setPickeCategory(novaCategory) 
  setPickeLetters(wordLetters)

  setGameStage(stage[1].name)

},[pickeWordAndCategory])

//Processando  as letras na aplicação
const verifyLatter = (letter) => {

  const normalizedLetter = letter.toLowerCase()

  //Verificando se a letra ja foi digitada
  if (guessesLetters.includes(normalizedLetter) || worongLetters.includes(normalizedLetter)) return;

  if (pickeLetters.includes(normalizedLetter)) {
    setGuessesLetters((actualGuessesLetters) => [
      ...actualGuessesLetters,
      normalizedLetter
    ])
  }else{
    setWorongLetters((actualWorongLetters) => [
      ...actualWorongLetters,
      normalizedLetter
    ]) 
    setGuesses((actualGuesses) => actualGuesses - 1)
  }
}

const clearLettersState = () => {
  setPickeLetters ([]);
  setGuessesLetters ([]);
  setWorongLetters ([]);
    
}
//Monitorar states resetar o jogo
useEffect(() => {

  if (guesses <= 0)
  {
    //Limpar os states
    clearLettersState()

    setGameStage(stage[2].name) // Pagina final, fim do jogo  

  }

},[guesses,pickeWord])

//Monitorar quando a palavra for acertada
useEffect(() => {

    // Remover espaços em branco de cada palavra
    const cleanedString = pickeLetters.map(word => word.replace(/\s/g, '')).join('');

    //Vai conter todas as letras da palavra, retirando letras que esteja duplicadas
    const uniqueLetters = [... new Set(cleanedString)]

    if( guessesLetters.length === uniqueLetters.length && guessesLetters.length >= 1){

      //aumentando a pontuação do usuário
      setScore((actualScore) =>( actualScore += 100))

      setGuessesWords((actualGuessesWords) => [
        ...actualGuessesWords,
        pickeWord
      ])

      setGuesses(guessesQtd) 

      //Resetar o jogo
      startGamer()

    }

  // guessesLetters => array que recebe todas as letras, mais não duplica letras

},[guessesLetters, pickeLetters, startGamer, guessesWords, pickeWord])


const retryResult = () => {

  retry()
  setGuessesWords ([]);
}
//Reiniciando o jogo
const retry = () => {

  setScore(0)
  setGuesses(guessesQtd)

  setGameStage(stage[0].name)
}

console.log(pickeWord)
// console.log(guessesWords)

const showResul = () => {


  setGameStage(stage[3].name)

  // console.log(pickeWord)
console.log(guessesWords)

}

  return (

    <div className='App'>

      <Header />

      {gameStage === "start" &&  <StartScreen startGamer={startGamer} />}
            
      {gameStage === "game" &&  <Gamer verifyLatter={verifyLatter} pickeWord={pickeWord} pickeCategory={pickeCategory} pickeLetters={pickeLetters} guessesLetters={guessesLetters} worongLetters={worongLetters} guesses={guesses} score={score} />}

      {gameStage === "end" &&  <GamerOver retry={retry} showResul={showResul} score={score} pickeWord={pickeWord}/>}
      
      {gameStage === "result" &&  <MatchResult  retry={retryResult} guessesWords={guessesWords} guessesQtd={guessesWords.length} score={score} />}
      
      <Footer />

    </div>
  )
}

export default App
