import ProductCard from "../ProductCard/ProductCard";

const Cart = ({ items, handleCartUpdate, removeFromCart }) => {
  return (
    <div>
      <h1>This is a cart</h1>
      {items.map(item => <ProductCard info={item} handleCartUpdate={handleCartUpdate} removeFromCart={removeFromCart} type="cart" />)}
    </div>
  )
};

export default Cart;