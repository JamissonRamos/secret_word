//Components
import ButtonPrimary from "../../button/button/ButtonPrimary"

//Css
import styles  from "./CardHome.module.css"

const CardHome = () => {

    return (

        <>
            <div className={styles.content}>

                <div>
                    <p className={styles.text}>Clique no botão para iniciar o jogo.</p>
                </div>

                <div className={styles.box_button}>
                    <ButtonPrimary name="btnInstalJogo" value="Começar o Jogo" />
                </div>
            </div>
        </>
    )
}

export default CardHome