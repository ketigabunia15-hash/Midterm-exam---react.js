'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  remember: yup.boolean(),
});

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    });

    const result = await res.json();

    if (result.token) {
      if (data.remember) {
        localStorage.setItem('token', result.token);
      }
      router.push('/products');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <input placeholder="Username" {...register('username')} />
      <p>{errors.username?.message}</p>

      <input type="password" placeholder="Password" {...register('password')} />
      <p>{errors.password?.message}</p>

      <label>
        <input type="checkbox" {...register('remember')} />
        Remember me
      </label>

      <button type="submit">Login</button>
    </form>
  );
}