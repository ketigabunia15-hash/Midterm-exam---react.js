import Link from "next/Link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div style={{padding: "20px"}} >
            <h1>Products</h1>
            <div style ={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
            }}
            >
                {products.map((product) => (
                    <Link key={product.id}
                    href={'/products/details/${product.id} '}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "10px",
                        textAlign: "center",
                        textDecoration: "none",
                        color: "black",

                    }}
                    >
                        <img src={product.image} alt={product.title}
                        style={{width: "100px", height: "100px", objectFit: "contain"}}
                        />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>

                    </Link>
                ))}

            </div>
        </div>
    );

}