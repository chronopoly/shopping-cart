import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(response => setProducts(response));
  }, []);

  return (
    <>
      <h1>This is a page with products</h1>
      <div className={styles.productContainer}>
        {products.map(product => <ProductCard info={product} key={product.id}/>)}
      </div>
    </>
  )
};

export default Products;