import { Link } from "react-router-dom"
import styles from "./Cart.module.css"
import ProductCard from "../ProductCard/ProductCard";

const Cart = ({ items, handleCartUpdate, removeFromCart, clearCart }) => {
  let total = 0;
  items.forEach(item => {
    total += item.quantity * item.price;
  });

  return (
    <div className={styles.cart}>
      <div className={styles.items}>
        <h1>Shopping cart</h1>
        {items.map(item => <ProductCard info={item} handleCartUpdate={handleCartUpdate} removeFromCart={removeFromCart} type="cart" />)}
        <div>
          <button><Link to={"/products/"}>Continue shopping</Link></button>
          <button onClick={clearCart}>Clear cart</button>
        </div>
      </div>
      <div className={styles.checkout}>
        <div className={styles.summary}>
          <div className={styles.coupon}>
            <h2>Discount Coupon</h2>
            <input type="text" placeholder="Enter your coupon code"/>
            <button>Apply your discount</button>
          </div>
          <h2>Order Summary</h2>
          <p>Discount: <span>$0.0</span></p>
          <p>Delivery: <span>$49.99</span></p>
          <p>Total: <span className={styles.total}>${(total + 49.99).toFixed(2)}</span></p>
        </div>
        <div className={styles.payment}>
          <h2>Payment Method</h2>
          <div>
            <input type="radio" name="payment" value="cash" id="paymentChoice1" />
            <label htmlFor="paymentChoice1">Cash</label>

            <input type="radio" name="payment" value="cash" id="paymentChoice2" />
            <label htmlFor="paymentChoice2">Credit Card</label>

          </div>
          <button>Check Out</button>
        </div>
        
      </div>
    </div>
  )
};

export default Cart;