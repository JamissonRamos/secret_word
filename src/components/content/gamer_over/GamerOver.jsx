
import ButtonPrimary from "../../button/button/ButtonPrimary"
import styles from "./GamerOver.module.css"

const GamerOver = ({retry}) => {
  return (
    <div className={styles.content} > 
    
      Pag Gamer Over

      <div className={styles.box_button}>
        <ButtonPrimary name="btnInstalJogo" value="Reiniciar Jogo" onclick={retry}/>
      </div>
    
    
    </div>
  )
}

export default GamerOver