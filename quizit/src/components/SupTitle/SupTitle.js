import React from 'react'
import { underline } from './SupTitle.module.css'

const spaces = '   ';
const SupTitle = ({ children }) => {
    return <h1 className={underline}>{spaces}{children}</h1>
}

export default SupTitle;