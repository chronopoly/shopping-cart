import styles from "./Cart.module.css"
import ProductCard from "../ProductCard/ProductCard";

const Cart = ({ items, handleCartUpdate, removeFromCart }) => {
  let total = 0;
  items.forEach(item => {
    total += item.quantity * item.price;
  });

  return (
    <div className={styles.cart}>
      <div className={styles.items}>
        {items.map(item => <ProductCard info={item} handleCartUpdate={handleCartUpdate} removeFromCart={removeFromCart} type="cart" />)}
      </div>
      <div className={styles.summary}>
        Order summary: ${total}
      </div>
    </div>
  )
};

export default Cart;