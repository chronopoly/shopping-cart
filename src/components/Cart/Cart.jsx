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
        <h1>Shopping cart</h1>
        {items.map(item => <ProductCard info={item} handleCartUpdate={handleCartUpdate} removeFromCart={removeFromCart} type="cart" />)}
      </div>
      <div className={styles.checkout}>
        <div className={styles.summary}>
          <div className={styles.coupon}>
            <h1>Discount Coupon</h1>
            <input type="text" placeholder="Enter your coupon code"/>
            <button>Apply your discount</button>
          </div>
          Order summary: ${total}
        </div>
        <div className={styles.payment}>
          Pay here
        </div>
        
      </div>
    </div>
  )
};

export default Cart;