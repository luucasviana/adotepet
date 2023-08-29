import React, { useContext } from 'react'

import { AuthContext } from '../contexts/Auth'

import styles from './HomePage.module.css'

function HomePage() {
    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    return (
        <div className={styles.logout}>
            <h1>Em Produção</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default HomePage
