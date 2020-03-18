import React from 'react'
import { NavLink } from "react-router-dom";
import { navWrapper, nav, navLink, greenish, redish, blueish, orangeish } from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={navWrapper}>
            <nav className={nav}>
                <NavLink className={`${navLink} ${greenish}`} to="/add">Create new</NavLink>
                <NavLink className={`${navLink} ${redish}`} to="/edit">Edit</NavLink>
                <NavLink className={`${navLink} ${blueish}`} to="/quiz">Start learning</NavLink>
                <NavLink className={`${navLink} ${orangeish}`} to="/quiz-continue">Continue</NavLink>
            </nav>
        </div>
    )
}

export default MainPage;