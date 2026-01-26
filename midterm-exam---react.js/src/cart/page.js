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

'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, removeFromCart } from '../redux/cartSlice';

export default function CartPage() {
  const { items, totalQuantity, totalPrice } = useSelector(
    state => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>

      <p>Total items: {totalQuantity}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>

      {items.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>${item.price}</p>

          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increase(item.id))}>+</button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
