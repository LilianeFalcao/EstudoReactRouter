import React from 'react'
import styles from "./NavBar.module.css"

//Link react pra navegação por react router
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navB}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={styles.links} to="/"> Home </Link>
            </li>
            <li className={styles.navItem}> 
                <Link className={styles.links} to="/about"> About </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar