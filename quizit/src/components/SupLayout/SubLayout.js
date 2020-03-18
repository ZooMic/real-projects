import React from 'react'
import { wrapper, nav, child} from './SubLayout.module.css'

const SubLayout = ({ children, className }) => {
    return (
        <div className={wrapper}>
            <div className={`${child} ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default SubLayout;