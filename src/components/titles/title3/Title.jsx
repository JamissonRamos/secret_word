
//Css
import styles from "./Title.module.css";

const Title = ({text}) => {
    
    return (

        <>
            <h3 className={styles.title} > {text} </h3>
        </>
    )

}

export default Title;