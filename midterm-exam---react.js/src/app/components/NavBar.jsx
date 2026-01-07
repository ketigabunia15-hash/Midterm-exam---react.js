'use client'
import link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <h2 className={styles.logo}> MyApp </h2>
            <ul className={styles.menu}>
                <li><link href="/">Home</link></li>
                <li><link href="/">About</link></li>
                <li><link href="/">contact</link></li>
            </ul>

        </nav>
    );

}