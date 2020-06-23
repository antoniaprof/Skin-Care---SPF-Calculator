import React from 'react';
import Links from './Links/Links';
import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={styles.navBar}>
            <nav className={styles.links}>
            <Links />
            </nav>       
        </header>
    );
};

export default Header;