import React from 'react';
import classNames from 'classnames';
import { getSizeStyle, MEDIUM } from './size.helper';
import { getColorStyle, POSITIVE, DISABLED } from './color.helper';
import { btn } from './Button.module.css';

const Button = (props) => {
    const {
        children,
        size = MEDIUM,
        color = POSITIVE,
        disabled = false,
        className = '',
        onClick,
        onDisabledClicked,
    } = props;

    const handleClick = event => {
        if (disabled) {
            if (typeof onDisabledClicked === 'function') {
                onDisabledClicked(event);
            }
        } else {
            if (typeof onClick === "function") {
                onClick(event);
            }
        }
    }

    const styles = classNames(
        btn,
        getSizeStyle(size),
        getColorStyle(disabled ? DISABLED : color),
        className,
    )

    return (
        <button
            className={styles}
            onClick={handleClick}
        >
            {children}
        </button>
    )
};

export default Button;