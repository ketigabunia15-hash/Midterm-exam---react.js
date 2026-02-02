'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './profile.module.css';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login'); 
      return;
    }

    async function getProfile() {
      try {
        const res = await fetch('https://fakestoreapi.com/users/3'); 
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    router.push('/login');            
  };

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>Profile not found</p>;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.info}>
        <h2>Welcome {user.name.firstname}</h2>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Full Name:</b> {user.name.firstname} {user.name.lastname}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Address:</b> {user.address?.street}, {user.address?.city}</p>
        <p><b>Zip Code:</b> {user.address?.zipcode}</p>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className={styles.avatar}>
        <Image
          src="/unnamed.jpg"
          alt="User avatar"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
}