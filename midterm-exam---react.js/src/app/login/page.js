'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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

  // თუ token არის localStorage-ში, ავტომატურად გადამისამართება
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/profile');
    }
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
        if (data.remember) {
          localStorage.setItem('token', result.token);
        }
        router.push('/profile'); // წარმატებით შესვლის შემდეგ პროფილზე გადამისამართება
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('username')} placeholder="Username" />
          <p style={{ color: 'red' }}>{errors.username?.message}</p>
        </div>

        <div>
          <input {...register('password')} type="password" placeholder="Password" />
          <p style={{ color: 'red' }}>{errors.password?.message}</p>
        </div>

        <div>
          <label>
            <input type="checkbox" {...register('remember')} />
            Remember Me
          </label>
        </div>

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}