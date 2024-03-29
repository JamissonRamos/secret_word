
import ButtonPrimary from "../../button/button/ButtonPrimary"
import ButtonSecond from "../../button/button/ButtonSecond"
import Title from "../../titles/title2/Title"
import styles from "./GamerOver.module.css"

const GamerOver = ({retry, showResul, score, pickeWord}) => {
  return (
    <div className={styles.content} > 
    
      <dir className={styles.content_tex}>
          <div>
            <Title text="Fim do Jogo" />
          </div>

          <div className={styles.score} >
              <Title text="A palavra correta:" />
              <span> {pickeWord} </span>
          </div>



          <div className={styles.score} >
              <Title text="Sua pontuação foi:" />
              <span> {score} </span>
          </div>
      </dir>

      <div className={styles.box_buttons}>

        <div className={styles.box_button}>
          <ButtonPrimary name="btnInstalJogo" value="Reiniciar Jogo" onclick={retry}/>
        </div>

        <div className={styles.box_button}>
          <ButtonSecond name="btnResultJogo" value="Resultado do Jogo" onclick={showResul}/>
        </div>
        
      </div>
    
    
    </div>
  )
}

export default GamerOver