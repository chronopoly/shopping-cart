import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './App.module.css'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Homepage from '../Homepage/Homepage'

function App() {
  const { name } = useParams();
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(response => setProducts(response));
  }, []);


  const handleCartUpdate = (newItem) => {
    const newCart = cart.slice();
    const newProducts = products.slice();

    newProducts.forEach(product => {
      if (newItem.id === product.id) {
        product.quantity = newItem.quantity;
      }
    });

    setProducts(newProducts);

    newCart.forEach(item => {
      if (newItem.id === item.id ) {
        item.quantity = newItem.quantity;
        setCart(newCart);
      }
    });
    if (!newCart.some(item => newItem.id === item.id)) {
      newCart.push(newItem);
      setCart(newCart);
    }
  };

  const removeFromCart = (itemId) => {
    const newCart = [...cart];
    newCart.forEach((item, index) => {
      if (itemId === item.id) {
        newCart.splice(index, 1);
        setCart(newCart);
      }
    })  
  };

  const clearCart = () => {
    const newProducts = [...products];
    newProducts.forEach(product => {
      product.quantity = 1;
    });
    setProducts(newProducts);
    setCart([]);
  };

  return (
    <>
      <Navbar numberOfItems={cart.length} />
      {name === "products" ? (
        <Products products={products} handleCartUpdate={handleCartUpdate} />
      ) : name === "cart" ? (
        <Cart items={cart} handleCartUpdate={handleCartUpdate} removeFromCart={removeFromCart} clearCart={clearCart} /> 
      ) : (
        <Homepage />
      )}
    </>
  )
}

export default App
