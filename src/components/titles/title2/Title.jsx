
//Css
import styles from "./Title.module.css";

const Title = ({text, color}) => {
    
    return (

        <>
            <h2 className={color == 2 ? styles.title_dwo  : styles.title } > {text} </h2>
        </>
    )

}

export default Title;