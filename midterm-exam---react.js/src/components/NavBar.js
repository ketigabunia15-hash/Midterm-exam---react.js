import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/products">Products</Link> |{' '}
      <Link href="/profile">Profile</Link> |{' '}
      <Link href="/cart">Cart</Link>
    </nav>
  );
}