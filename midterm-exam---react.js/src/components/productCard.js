'use client';

import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/redux/cartSlice';
import styles from './products.module.css'; 

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <div className={styles.buttons}>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
        <Link href={`/products/details/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}
