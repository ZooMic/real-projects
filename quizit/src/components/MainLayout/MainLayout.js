import React from 'react'
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                { children }
            </div>
        </div>
    )
}

export default MainLayout;