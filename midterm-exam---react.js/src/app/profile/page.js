'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); 
      return;
    }

    async function getProfile() {
      const res = await fetch('https://fakestoreapi.com/users/3'); 
      const data = await res.json();
      setUser(data);
    }

    getProfile();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}