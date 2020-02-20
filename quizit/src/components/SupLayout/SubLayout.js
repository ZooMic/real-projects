import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './SubLayout.module.css'

const SubLayout = ({ children }) => {
    const { goBack } = useHistory();
    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <button onClick={goBack}>{"<"}</button>
                <header>Quizit</header>
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}

export default SubLayout;