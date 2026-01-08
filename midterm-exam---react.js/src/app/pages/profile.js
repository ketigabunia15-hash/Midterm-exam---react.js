export default function ProfilePage({user}) {
    return (
        <div style={{padding: "20px", maxWidth: "600px", margin: "auto"}} >
            <h1>Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Name:</strong> {user.name.firstName} {user.name.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <h2> Address </h2>
            <p> {user.address.number} {user.address.street} </p>
            <p> {user.address.city}, {user.address.zipcode} </p>
            <p><strong> Geolocation: </strong> lat {user.address.geolocation.lat}, long {user.address.geolocation.long}</p>

            <p><strong> Phone: </strong> {user.phone}</p>
        </div>
    );
}

export async function getServerSideProps(){
    const res=await fetch('https://fakestoreapi.com/users/3');
    const user=await res.json();

    return{
        props: {user},

    },

}

