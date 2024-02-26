
import styles from "./ButtonPrimary.module.css"

const ButtonPrimary = ({name, value}) => {
    
    return (
        <>
            <button className={styles.button} name={name}> { value } </button>
        </>
    )
}

export default ButtonPrimary