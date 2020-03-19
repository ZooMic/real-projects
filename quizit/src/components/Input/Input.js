import React from 'react'
import classNames from 'classnames';
import { Input as AntInput } from 'antd';
import { fontInherit } from './Input.module.css';

export const Input = ({ infoText='', status='info', className, ...rest }) => {
    const styles = classNames(className, fontInherit);
    
    return (
        <AntInput
            className={styles}
            {...rest}
        />
    )
}

const { TextArea: AntTextArea } = AntInput;
export const TextArea = ({ infoText='', status='info', className, ...rest }) => {
    const styles = classNames(className, fontInherit);
    return <AntTextArea className={styles} {...rest} />
}