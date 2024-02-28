//Components
import ButtonPrimary from "../../button/button/ButtonPrimary"

//Css
import styles  from "./StartScreen.module.css"

const StartScreen = ({startGamer}) => {

    return (

        <>
            <div className={styles.content}>

                <div>
                    <p className={styles.text}>Clique no botão para iniciar o jogo.</p>
                </div>

                <div className={styles.box_button}>
                    <ButtonPrimary name="btnInstalJogo" value="Começar o Jogo" onclick={startGamer}/>
                </div>
            </div>
        </>
    )
}

export default StartScreen