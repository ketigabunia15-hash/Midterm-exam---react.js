'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div style={{ padding: '20px' }}>
      <h1>Profile</h1>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>

      <button 
        onClick={handleLogout} 
        style={{ marginTop: '20px', padding: '10px', cursor: 'pointer' }}
      >
        Log Out
      </button>
    </div>
  );
}