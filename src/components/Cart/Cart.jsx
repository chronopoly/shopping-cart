const Cart = ({ items }) => {
  return (
    <div>
      <h1>This is a cart</h1>
      {items.map(item => <h3 key={item.id}>{item.title} - {item.quantity}</h3>)}
    </div>
  )
};

export default Cart;