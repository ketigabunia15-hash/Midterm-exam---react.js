'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}