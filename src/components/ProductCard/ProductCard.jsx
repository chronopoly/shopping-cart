import { useState } from "react";

import Counter from "../Counter/Counter";
import styles from "./ProductCard.module.css";

const ProductCard = ({ info }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  
  return (
    <div className={styles.card}>
      <img src={info.image} alt="picture of a product" />
      <p>{info.title}</p>
      <Counter quantity={itemQuantity} setQuantity={setItemQuantity} />
    </div>
  )
};

export default ProductCard;