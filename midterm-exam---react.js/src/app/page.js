import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My Store</h1>

      <nav style={{ margin: '20px 0' }}>
        <Link href="/login" style={{ marginRight: '10px' }}>Login</Link>
        <Link href="/profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link href="/products" style={{ marginRight: '10px' }}>Products</Link>
        <Link href="/cart" style={{ marginRight: '10px' }}>Cart</Link>
      </nav>

      <p>Choose a page from the menu above.</p>
    </div>
  );
}