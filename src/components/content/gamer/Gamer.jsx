
import ButtonPrimary from "../../button/button/ButtonPrimary"
import styles from "./Gamer.module.css"

const Gamer = ({verifyLatter}) => {

  return (

    <div className={styles.content} > 
    
      Pag Gamer

      <div className={styles.box_button}>
        <ButtonPrimary name="btnInstalJogo" value="Finalizar Jogo" onclick={verifyLatter} />
      </div>
    
    
    </div>
  )
}

export default Gamer