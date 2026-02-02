'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../login/login.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      name: { firstname: data.firstname, lastname: data.lastname },
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: {
        street: data.street,
        number: data.number,
        city: data.city,
        zipcode: data.zipcode,
        geolocation: { lat: "0", long: "0" } // default
      }
    };

    try {
      const res = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const newUser = await res.json();
      alert('Registration successful! You can now login.');
      reset();
      router.push('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className={styles.input} {...register('firstname')} placeholder="First Name" />
          <input className={styles.input} {...register('lastname')} placeholder="Last Name" />
          <input className={styles.input} {...register('username')} placeholder="Username" />
          <input className={styles.input} {...register('email')} type="email" placeholder="Email" />
          <input className={styles.input} {...register('password')} type="password" placeholder="Password" />
          <input className={styles.input} {...register('phone')} placeholder="Phone" />
          <input className={styles.input} {...register('street')} placeholder="Street" />
          <input className={styles.input} {...register('number')} type="number" placeholder="Number" />
          <input className={styles.input} {...register('city')} placeholder="City" />
          <input className={styles.input} {...register('zipcode')} placeholder="Zipcode" />
          <button className={styles.button} type="submit">Register</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link href="/login">← Back to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}