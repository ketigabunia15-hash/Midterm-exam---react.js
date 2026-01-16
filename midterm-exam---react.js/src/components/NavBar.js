import Linki from 'next.link';

export default function NavBar() {
    return(
        <nav style = {{padding: '10px', background: '#f2f2f2'}} >
            <Link href="/products" style={{margin: '0 10px'}}> Products</Link>
            <Link href="/profile" style={{margin: '0 10px'}}> Profile </Link>
            <Link href="/cart" style={{margin: '0 10px'}}> Cart </Link>
        </nav>
    );
}