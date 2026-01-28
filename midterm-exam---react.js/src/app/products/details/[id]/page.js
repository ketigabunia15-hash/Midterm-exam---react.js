'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './details.module.css';

export default function ProductDetails() {
  const params = useParams();
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

  return (
    <div className={styles.details}>
      <img src={product.image} alt={product.title} />

      <div className={styles.info}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p><b>Category:</b> {product.category}</p>
        <p><b>Price:</b> ${product.price}</p>
        <p><b>Rating:</b> {product.rating?.rate}</p>
        <p><b>Reviews:</b> {product.rating?.count}</p>
      </div>
    </div>
  );
}