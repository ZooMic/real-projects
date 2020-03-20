import React from 'react';
import classNames from 'classnames';
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ className,  ...rest }) => {
    const style = classNames(
        className,
        'ant-btn ant-btn-primary ant-btn-block',
    );
    return <RouterNavLink className={style} {...rest} />
};

export default NavLink;