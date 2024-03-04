
import styles from "./ButtonPrimary.module.css"

const ButtonPrimary = ({name, value, onclick}) => {
    
    return (
        <>
            <button className={styles.button} name={name} onClick={onclick}> <span>{ value }</span>  </button>
        </>
    )
}

export default ButtonPrimary