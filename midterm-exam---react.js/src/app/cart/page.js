'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increase, decrease } from '../redux/cartSlice';
import styles from './cart.module.css';

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  if (items.length === 0) return <p>Your cart is empty.</p>; 

  return (
    <div>
      <h1>Your Cart</h1>
      <div className={styles.cartContainer}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.image}/>
            <div className={styles.info}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className={styles.qty}>
                <button onClick={() => dispatch(decrease(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increase(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}