import Link from 'next/link';

export default function NavBar() {
    return (
        <nav style={{padding: '15px', background: '#eee'}} >
            <Link href="/products" style={{marginRight: '15px'}} > Products </Link>
            <Link href="/profile" style={{marginRight: '15px'}} > Profile </Link>
            <Link href="/cart" > Cart </Link>
        </nav>
    );
}