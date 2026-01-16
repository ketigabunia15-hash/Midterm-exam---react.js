'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './productDetail.module.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h1>{product.title}</h1>
        <p className={styles.category}><strong>Category:</strong> {product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}><strong>Price:</strong> ${product.price}</p>
        <p className={styles.rating}>
          <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
        </p>
      </div>
    </div>
  );
}