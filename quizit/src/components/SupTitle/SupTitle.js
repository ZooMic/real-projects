import React from 'react'
import { underline } from './SupTitle.module.css'

const SupTitle = ({ children }) => {
    return <h1 className={underline}>{children}</h1>
}

export default SupTitle;