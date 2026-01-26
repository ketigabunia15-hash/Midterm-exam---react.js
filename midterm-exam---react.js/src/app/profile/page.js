'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const res = await fetch('https://fakestoreapi.com/users/3');
      const data = await res.json();
      setUser(data);
    }
    getProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Profile</h1>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}