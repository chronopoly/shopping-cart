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
    <div className={type === "product" ? styles.productCard : styles.cartCard}>
      <div className={styles.cartProductInfo}>
        <div className={styles.imageWrapper}>
          <img src={info.image} alt="picture of a product" />
        </div>
        <p>{info.title}</p>
      </div>
      <Counter quantity={itemQuantity} setQuantity={type === "cart" ? handleCounterChange : setItemQuantity} />
      <p>${type === "cart" ? (info.quantity * info.price).toFixed(2) : info.price}</p>
      {type === "product" ? <button className={styles.addButton} onClick={handleButtonClick}>Add to cart</button> : <button className={styles.deleteButton} onClick={handleRemoveButton}>Delete</button>}
    </div>
  )
};

export default ProductCard;