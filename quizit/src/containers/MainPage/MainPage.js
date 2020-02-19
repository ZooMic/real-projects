import React from 'react'
import { NavLink } from "react-router-dom";
import { header, navWrapper, nav, navLink, greenish, redish, blueish } from './MainPage.module.css';

const MainPage = () => {
    return (
        <div>
            <header className={header}>Quizit</header>
            <div className={navWrapper}>
                <nav className={nav}>
                    <NavLink className={`${navLink} ${greenish}`} to="/add">Add new quiz</NavLink>
                    <NavLink className={`${navLink} ${redish}`} to="/edit">Edit existing quizzes</NavLink>
                    <NavLink className={`${navLink} ${blueish}`} to="/quiz">Start learning</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default MainPage;