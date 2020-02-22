import React from 'react'
import { wrapper } from './SupContent.module.css'

const SupContent = ({ className, children }) => {
    return <div className={`${className} ${wrapper}`}>{children}</div>
}

export default SupContent;