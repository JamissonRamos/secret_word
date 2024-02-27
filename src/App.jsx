
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

const stage = [

  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {

  const [gameStage] = useState(stage[0].name) //setGameStage
  const [words] = useState(wordList)
  
  console.log(words)
  return (

    < div className='App'>

      <Header />

      
        {gameStage === "start" &&  <StartScreen />}
        {gameStage === "game" &&  <Gamer />}
        {gameStage === "end" &&  <GamerOver />
      }


      <Footer />

    </ div>
  )
}

export default App
