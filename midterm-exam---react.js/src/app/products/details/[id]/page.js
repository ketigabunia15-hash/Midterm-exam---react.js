import styles from '../details.module.css';

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className={styles.details}>
      <img src={product.image} alt={product.title} />
      <div className={styles.info}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate}</p>
        <p>Reviews: {product.rating.count}</p>
      </div>
    </div>
  );
}