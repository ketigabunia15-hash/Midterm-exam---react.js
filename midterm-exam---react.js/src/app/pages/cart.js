import {useEffect, useState } from "react";

export default function CartPage () {
    const [cart, setCart ] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/2')
        .then((res) => res.json())
        .then((data) => setCart(data));
    }, []);

    useEffect(() => {
        if (!cart) return;

        const fetchProducts = async () => {
            const prods = await Promise.all (
                cart.products.map(async (item) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
                    const product = await res.json();

                    return {
                        ...product,
                        quantity: item.quantity,
                    };
                })
            );
            setProducts(prods);
        };
        fetchProducts();
    }, [cart]);

    const updateQuantity = (id, delta) => {
        setProducts((prev) =>
            prev.map((p) => {
                if (p.id === id) {
                    let newQty = p.quantity + delta;
                    if (newQty < 1) newQty = 1;
                    if (newQty > 10) newQty = 10;
                    return {...p, quantity: newQty };
                }
                return p;
            })
        );
    };

    if (!cart || products.length === 0) return <p> Loading cart ... </p>

    return (
        <div style={{padding: "20px", maxWidth: "800px", margin: "auto"}} >
            <h1>Your Cart</h1>
            <div style ={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {products.map((product) => {
                    <div 
                    key={product.id}
                    style ={{display: "flex", alignItems: "center", gap: "20px", border: "1px solid #ccc", borderRadius: "10px", padding: "10px"}}>

                        <img 
                        src= {product.image} alt={product.title}
                        style={{width: "80px", height: "80px", objectFit: "contain"}}
                        />
                        <div style={{flex: 1}}>
                            <h3>{product.title}</h3>
                            <p> ${product.price}</p>
                        </div>
                        <div>
                            <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                            <span style={{margin: "0 10px"}}>{product.quantity}</span>
                            <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                        </div>
                        <div>
                            <strong> Total: ${product.price * product.quantity}</strong>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}