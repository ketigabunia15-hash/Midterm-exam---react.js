'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './login.module.css';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) router.push('/profile');
  }, [router]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password
        })
      });

      const result = await res.json();

      if (result.token) {
        // მხოლოდ მაშინ ინახავს, როცა Remember Me შეირჩა
        if (data.remember) {
          localStorage.setItem('token', result.token);
        }
        router.push('/profile'); 
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              {...register('username')}
              placeholder="Username"
            />
            <p className={styles.error}>{errors.username?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              {...register('password')}
              type="password"
              placeholder="Password"
            />
            <p className={styles.error}>{errors.password?.message}</p>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" {...register('remember')} />
            <label>Remember Me</label>
          </div>

          <button className={styles.button} type="submit">Login</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Not registered? <Link href="/register">Register</Link>
        </p>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
