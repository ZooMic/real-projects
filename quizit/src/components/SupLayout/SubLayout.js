import React from 'react'
import { useHistory } from "react-router-dom";
import { wrapper, nav, child} from './SubLayout.module.css'

const SubLayout = ({ children, className }) => {
    const { goBack, goForward } = useHistory();
    return (
        <div className={wrapper}>
            <nav className={nav}>
                <button onClick={goBack}>{"<"}</button>
                <header>Quizit</header>
                <button onClick={goForward}>{">"}</button>
            </nav>
            <div className={`${child} ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default SubLayout;