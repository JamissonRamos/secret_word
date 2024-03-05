
import styles from "./ButtonSecond.module.css"

const ButtonSecond = ({name, value, onclick}) => {
    
    return (
        <>
            <button className={styles.button} name={name} onClick={onclick}> <span>{ value }</span>  </button>
        </>
    )
}

export default ButtonSecond