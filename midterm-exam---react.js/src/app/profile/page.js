async function getProfile() {
  const res = await fetch('https://fakestoreapi.com/users/3');
  return res.json();
}

export default async function ProfilePage() {
  const user = await getProfile();

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}