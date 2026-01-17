'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/2')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  if (!cart) return <p>Loading...</p>;

  return (
    <div>
      <h1>Cart</h1>

      <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
      <span style={{ margin: '0 10px' }}>{quantity}</span>
      <button onClick={() => quantity < 10 && setQuantity(quantity + 1)}>+</button>
    </div>
  );
}