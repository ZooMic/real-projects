import React from 'react'
import classNames from 'classnames';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { header, small, left, right, title, active } from './MainBanner.module.css';

const rootPath = '/'
const MainBanner = () => {
    const { pathname } = useLocation();
    const { goBack, goForward } = useHistory();

    const isRootPath = pathname === rootPath;
    const classes = classNames(
        header,
        !isRootPath ? small : '',
    )
    
    return (
        <header className={classes}>
            {!isRootPath ? <button className={left} onClick={goBack}><CaretLeftOutlined /></button> : null}
            <NavLink className={title} activeClassName={active} to="/">Quizit</NavLink>
            {!isRootPath ? <button className={right} onClick={goForward}><CaretRightOutlined /></button> : null}
        </header>
    )
}

export default MainBanner;