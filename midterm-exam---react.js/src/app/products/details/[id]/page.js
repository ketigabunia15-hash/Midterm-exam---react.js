'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import styles from './details.module.css';

export default function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  const stars = Math.round(product.rating?.rate || 0);

  return (
    <div className={styles.details}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <div className={styles.info}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p><b>Category:</b> {product.category}</p>
        <p><b>Price:</b> ${product.price}</p>

        <p>
          <b>Rating:</b>{' '}
          {Array.from({ length: stars }, (_, i) => '⭐').join('')}
          {' '}
          ({product.rating?.count} reviews)
        </p>

        <button
          className={styles.addButton}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}