
import ButtonPrimary from "../../button/button/ButtonPrimary"
import styles from "./Gamer.module.css"
import Title from "../../titles/title2/Title"

const Gamer = ({verifyLatter}) => {

  return (

    <div className={styles.gamer} > 

      {/* Indicar a pontuação e a dica da palvra */}
      <div className={styles.points_category}>

        <div className= {styles.points}>

          <Title text="Pontuação:" />

          <span>0</span>

        </div>

        <div className= {styles.category} >
          
          <Title text="Dica da palavra:" />

          <span>Jogo de Tabuleiro</span>

        </div>

      </div>
      
      <div>
        <Title text="Você tem 3 tentativas" />
      </div>
      <div className={styles.wordContainer}>
        <span className={styles.letter}>W</span>
        <span className={styles.letter}>A</span>
        <span className={styles.letter}>R</span>
        <span className={styles.blankSquare}></span>
  
      </div>

      <div className={styles.letterContainer}>

        <div >
          <Title text="Tenta advinha uma letra da palavra"/>
        </div>

        <form className={styles.formLetters}>

            <input className={styles.letter} type="text" name="letter" maxLength={1} required />

            <div className={styles.box_button}>
              <ButtonPrimary name="btnInstalJogo" value="Joga !" onclick={verifyLatter} />
            </div>

        </form>

        <div className={styles.wrongLettersContainer}>

          <p>Letras já Utilizadas:</p>

          <div>
            <span>B,</span>
            <span>C,</span>
            <span>J</span>
          </div>

        </div>

      </div>   
    
    
    </div>
  )
}

export default Gamer