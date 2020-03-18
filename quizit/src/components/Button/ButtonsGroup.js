import React from 'react';
import { group } from './ButtonsGroup.module.css';

const ButtonsGroup = ({ children }) => (<div className={group}>{children}</div>)

export default ButtonsGroup;