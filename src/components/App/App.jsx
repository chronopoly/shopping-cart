import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './App.css'
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
    console.log(newProducts);

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

    console.log(newCart);
  }

  return (
    <>
      <Navbar />
      {name === "products" ? (
        <Products products={products} handleCartUpdate={handleCartUpdate} />
      ) : name === "cart" ? (
        <Cart items={cart} /> 
      ) : (
        <Homepage />
      )}
    </>
  )
}

export default App
