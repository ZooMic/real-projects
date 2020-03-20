import React from 'react';
import { Button as AntButton } from 'antd';
import classNames from 'classnames';
import { greenBtn, greenText } from './Button.module.css';

const Button = ({ className, type, green, ...rest }) => {
    const isPrimary = type === 'primary';
    const style = classNames(
        className,
        green && isPrimary ? greenBtn : '',
        green && !isPrimary ? greenText : '',
    );
    return <AntButton className={style} type={type} {...rest} />
};

export default Button;