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
