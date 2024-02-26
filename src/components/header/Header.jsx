//Components
import Title from "../titles/title1/Title"

//Css
import styles  from "./Header.module.css"

const Header = () => {
    
    return (

        <>
            <div className={styles.header} >

                <Title text="Secret Word"/>

            </div>
        </>
    )
}

export default Header