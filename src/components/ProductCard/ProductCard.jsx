import { useState } from "react";

import Counter from "../Counter/Counter";
import styles from "./ProductCard.module.css";

const ProductCard = ({ info, handleCartUpdate, removeFromCart, type="product" }) => {
  const [itemQuantity, setItemQuantity] = useState(info.quantity || 1);
  
  const handleButtonClick = () => {
    const newInfo = {...info};
    newInfo.quantity = itemQuantity;
    console.log(newInfo);
    handleCartUpdate(newInfo);
  }

  const handleCounterChange = (counterValue) => {
    setItemQuantity(counterValue);
    const newInfo = {...info};
    newInfo.quantity = counterValue;
    handleCartUpdate(newInfo);
  };

  const handleRemoveButton = () => {
    removeFromCart(info.id);
  };

  return (
    <div className={styles.card}>
      <img src={info.image} alt="picture of a product" />
      <p>{info.title}</p>
      <p>Price: {type === "cart" ? info.quantity * info.price : info.price}</p>
      <Counter quantity={itemQuantity} setQuantity={type === "cart" ? handleCounterChange : setItemQuantity} />
      {type === "product" ? <button onClick={handleButtonClick}>Add to cart</button> : <button onClick={handleRemoveButton}>X</button>}
    </div>
  )
};

export default ProductCard;