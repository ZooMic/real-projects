import React from 'react'
import MainBanner from './MainBanner';
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <MainBanner />
                { children }
            </div>
        </div>
    )
}

export default MainLayout;