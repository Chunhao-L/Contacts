import React, { useState } from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div>
                <a className={styles.title} href="https://www.resonate.cx/">
                    <img 
                        src={new URL(`/assets/nav/resonate-1.png`, import.meta.url).href} 
                        alt="Logo" 
                        className={styles.logoImage}
                    />
                </a>
            </div>
            <div className={styles.title}>
                Contacts
            </div>
            


        </nav>
    )
}
