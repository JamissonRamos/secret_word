
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

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
                    <FaInstagram className={styles.icone}/>
                    <FaGithub className={styles.icone}/>
                    <MdOutlineMailOutline className={styles.icone}/>
                </div>

            </div>
        </>
    )
}

export default Footer