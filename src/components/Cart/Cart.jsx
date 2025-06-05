import CartProductCard from "../CartProductCard/CartProductCard";
import ProductCard from "../ProductCard/ProductCard";

const Cart = ({ items, handleCartUpdate }) => {
  return (
    <div>
      <h1>This is a cart</h1>
      {items.map(item => <ProductCard info={item} handleCartUpdate={handleCartUpdate} type="cart" />)}
    </div>
  )
};

export default Cart;