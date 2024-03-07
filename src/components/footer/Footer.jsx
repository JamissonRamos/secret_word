
import { FaGithub, FaInstagram } from "react-icons/fa";

//Css
import styles from "./Footer.module.css"

const Footer = () => {

    return (

        <>
            <div className={styles.footer}>
                
                <div className={styles.text}>
                    <span className={styles.text_one}>Site desenvolvido</span>
                    <span className={styles.text_two}> Jamisson </span>
                </div>

                <div className={styles.list_social}>
                    <a href="https://www.instagram.com/jamissonliraramos/" target="_blank"> <FaInstagram className={styles.icone}/> </a>

                    <a href="https://github.com/JamissonRamos?rel=outbound" target="_blank">  <FaGithub className={styles.icone}/> </a>
                </div>

            </div>
        </>
    )
}

export default Footer