'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '../../components/productCard'; 
import styles from '../../components/products.module.css';

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}