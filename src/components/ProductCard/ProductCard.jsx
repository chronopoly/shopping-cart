import { useState } from "react";

import Counter from "../Counter/Counter";
import styles from "./ProductCard.module.css";

const ProductCard = ({ info, handleCartUpdate }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  
  const handleButtonClick = () => {
    const newInfo = {...info};
    newInfo.quantity = itemQuantity;
    console.log(newInfo);
    handleCartUpdate(newInfo);
  }

  return (
    <div className={styles.card}>
      <img src={info.image} alt="picture of a product" />
      <p>{info.title}</p>
      <Counter quantity={itemQuantity} setQuantity={setItemQuantity} />
      <button onClick={handleButtonClick}>Add to cart</button>
    </div>
  )
};

export default ProductCard;