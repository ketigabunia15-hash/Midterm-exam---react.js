'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './products.module.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <div className={styles.container}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>

            <Link href={`/products/details/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import ProductCard from './productCard.js';

{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}