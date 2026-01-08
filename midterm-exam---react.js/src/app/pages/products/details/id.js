import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProducDetails () {
    const router=useRouter();
    const {id}=router.query;
    const [product, setProduct]=useState(null);

    useEffect(() => {
        if(!id) return;
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [id]);

    if(!product) {
        return <div>Loading...</div>;

        return(
            <div style={{padding: "20px", maxWidth: "600px", margin: "auto" }} >
                <img src={product.image} alt={product.title}
                style={{width: "100%", height: "300px", objectFit: "contain"}}
                    />

                <h1>{product.title}</h1>
                <p><strong> Category: </strong> {product.category}</p>
                <p><strong> Price: </strong> ${product.price}</p>
                <p><strong> Description: </strong> {product.description}</p>
                <p> <strong> Rating: </strong> {product.rating.rate} / 5 (
{product.rating.count} reviews)
                </p>
            </div>  
        );
}

