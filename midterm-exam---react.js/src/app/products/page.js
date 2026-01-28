'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';
import styles from '../../components/products.module.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <div className={styles.container}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}