import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './SubLayout.module.css'

const SubLayout = ({ children, className }) => {
    const { goBack } = useHistory();
    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <button onClick={goBack}>{"<"}</button>
                <header>Quizit</header>
            </nav>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default SubLayout;