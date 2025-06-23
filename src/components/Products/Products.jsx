import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

const Products = ({ products, handleCartUpdate }) => {

  return (
    <>
      <div className={styles.productContainer}>
        {products.map(product => <ProductCard info={product} key={product.id} handleCartUpdate={handleCartUpdate}/>)}
      </div>
    </>
  )
};

export default Products;