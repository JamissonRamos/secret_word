import ButtonPrimary from "../../button/button/ButtonPrimary"
import Title from "../../titles/title2/Title"
import styles from "./MatchResult.module.css"

const MatchResult = ({retry, guessesWords, guessesQtd, score }) => {
    console.log(guessesWords)
    return (

        <>
            <div className={styles.content} > 

                <div  className={styles.cards}>
                    
                    <div className={[styles.card, styles.card_one].join(' ')} >
                        <span>Acertos de palavras</span>
                        <span> {guessesQtd} </span>
                    </div>

                    <div className={[styles.card, styles.card_dwo].join(' ')} >
                        <span> Total da pontuação </span>
                        <span> {score} </span>
                    </div>
                    
                </div>

                <div className={styles.box_words_list}>

                    <div>
                        <Title text="Lista de palavras adivinhadas" />
                    </div>

                    <div className={styles.box_list} >
                        {
                            guessesWords.map((p, i) => (

                                <div className={styles.card_list} key={i} > <span className={styles.words}> {p} </span> </div>
                            ))
                        }
                    </div>

                </div>

                <div className={styles.box_button}>
                    <ButtonPrimary name="btnInstalJogo" value="Reiniciar Jogo" onclick={retry}/>
                </div>




            </div>
        </>
    )
}

export default MatchResult