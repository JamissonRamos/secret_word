
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

const guessesQtd = 5

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
  const [guessesLetters, setGuessesLetters] = useState([]) //letras acertadas
  const [worongLetters, setWorongLetters] = useState([]) //Letras Erradas
  const [guesses, setGuesses] = useState(guessesQtd) //Total de chances 
  const [score, setScore] = useState(0) //Total de pontos 




  
//Funções da aplicação 

const pickeWordAndCategory = useCallback(() => {
//Coloca toda a condição dentro de um loop, verificar se a palvra que pegou está dentro de um array que vai armazena plavras ja selecionada 
// e não deixa coloca novamente
// coloca no array de palavras ja usada, somente palavras acertada, para que possa mostra no final as palvras acertadas;



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
},[words])

//Iniciando o Gamer, Estdo inicial da aplicação
const startGamer = useCallback(() => {

  clearLettersState()

  //Pegar uma categoria e uma palavra da cetgoria selecionada
  const {novaCategory, word} = pickeWordAndCategory()

  //Criando um array com as letras da palavra selecionada
  let wordLetters = word.split("")
  //Passando todas as letras para minusculas

  // console.log(wordLetters)
  wordLetters = wordLetters.map((l) => l.toLowerCase())

  setPickeWord(word) 
  setPickeCategory(novaCategory) 
  setPickeLetters(wordLetters)

  setGameStage(stage[1].name)

},[pickeWordAndCategory])

//Processando  as letras na aplicação
const verifyLatter = (letter) => {

  console.log(letter)
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
    //Retirar a palvra que não foi acertada, a plvra vai ser coloca no array dentro da função de gerar palavra
    //Chegando nesse ponto o array vai esta 
  }

    //setGameStage(stage[2].name)
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

},[guesses])

//Monitorar quando a palavra for acertada
useEffect(() => {

    // Remover espaços em branco de cada palavra
    const cleanedString = pickeLetters.map(word => word.replace(/\s/g, '')).join('');

    //Vai conter todas as letras da palavra, retirando letras que esteja duplicadas
    const uniqueLetters = [... new Set(cleanedString)]
    console.log(uniqueLetters)
    console.log(guessesLetters)

    if( guessesLetters.length === uniqueLetters.length && guessesLetters.length >= 1){
        console.log("Entrou")
      //aumentando a pontuação do usuário
      setScore((actualScore) =>( actualScore += 100))

      //Limpar os Stets
      // clearLettersState()

      //Resetar o jogo
      startGamer()

    }

  // guessesLetters => array que recebe todas as letras, mais não duplica letras

},[guessesLetters, pickeLetters, startGamer])


console.log(pickeWord)
// console.log(pickeCategory)
// console.log(pickeLetters)
// console.log(guessesLetters)
// console.log(worongLetters)


//Reiniciando o jogo
const retry = () => {

  setScore(0)
  setGuesses(guessesQtd)

  setGameStage(stage[0].name)
}



  return (

    <div className='App'>

      <Header />

      {gameStage === "start" &&  <StartScreen startGamer={startGamer} />}
            
      {gameStage === "game" &&  <Gamer verifyLatter={verifyLatter} pickeWord={pickeWord} pickeCategory={pickeCategory} pickeLetters={pickeLetters} guessesLetters={guessesLetters} worongLetters={worongLetters} guesses={guesses} score={score} />}

      {gameStage === "end" &&  <GamerOver retry={retry} score={score} />}
      
      <Footer />

    </div>
  )
}

export default App
