'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link className={pathname === '/products' ? styles.active : ''} href="/products">
        Products
      </Link>

      <Link className={pathname === '/profile' ? styles.active : ''} href="/profile">
        Profile
      </Link>

      <Link className={pathname === '/cart' ? styles.active : ''} href="/cart">
        Cart
      </Link>
    </nav>
  );
}