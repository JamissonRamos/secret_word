
//Css
import styles from "./Title.module.css";

const Title = ({text}) => {
    
    return (

        <>
            <h2 className={styles.title} > {text} </h2>
        </>
    )

}

export default Title;