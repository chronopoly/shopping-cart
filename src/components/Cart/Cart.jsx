import ProductCard from "../ProductCard/ProductCard";

const Cart = ({ items, handleCartUpdate, removeFromCart }) => {
  let total = 0;
  items.forEach(item => {
    total += item.quantity * item.price;
  });

  return (
    <div>
      <h1>This is a cart</h1>
      <h2>Total cost: ${total} </h2>
      {items.map(item => <ProductCard info={item} handleCartUpdate={handleCartUpdate} removeFromCart={removeFromCart} type="cart" />)}
      
    </div>
  )
};

export default Cart;