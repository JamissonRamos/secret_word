
import ButtonPrimary from "../../button/button/ButtonPrimary"
import styles from "./Gamer.module.css"
import Title from "../../titles/title2/Title"
import { useState, useRef } from "react"

//pickeWord
const Gamer = ({verifyLatter, pickeCategory, pickeLetters, guessesLetters, worongLetters, guesses, score}) => {
  
  const [letter, setLetter] = useState("")
  const lettersInputRef  =  useRef(null)

  const handleSubmit = (e) => {

    e.preventDefault();

    verifyLatter(letter)

    setLetter("")
    lettersInputRef.current.focus()

    console.log(letter);

  }


  return (

    <div className={styles.gamer} > 

      {/* Indicar a pontuação e a dica da palvra */}
      <div className={styles.points_category}>

        <div className= {styles.points}>

          <Title text="Pontuação:" />

          <span> {score} </span>

        </div>

        <div className= {styles.category} >
          
          <Title text="Dica da palavra:" />

          <span> {pickeCategory} </span>

        </div>

      </div>
      
      <div>
        {
          guesses <= 1 ? (<Title text={`Você tem ${guesses}  tentativas`} color={2} />) : (<Title text={`Você tem ${guesses}  tentativas` } color={1}/>)
        }
        
      </div>
      <div className={styles.wordContainer}>

        {
          pickeLetters.map((l, i) => (

            guessesLetters.includes(l) ? (<span key={i} className={styles.letter}> {l} </span>) : (<span key={i} className={styles.blankSquare}></span>)

          ))
        }
       
        
        
  
      </div>

      <div className={styles.letterContainer}>

        <div >
          <Title text="Tenta advinha uma letra da palavra"/>
        </div>

        <form onSubmit={handleSubmit} className={styles.formLetters}>

            <input className={styles.letter} type="text" name="letter" maxLength={1} required onChange={(e) => { setLetter(e.target.value)}} ref={lettersInputRef} value={letter}/>

            <div className={styles.box_button}>

              <ButtonPrimary name="btnInstalJogo" value="Joga !" /> 
            </div>

        </form>

        <div className={styles.wrongLettersContainer}>

          <p>Letras já Utilizadas:</p>

          <div>

            {
              worongLetters.map((l, i) => (

                <span key={i}> {l}, </span>

              ))
            }
            
          </div>

        </div>

      </div>   
    
    
    </div>
  )
}

export default Gamer