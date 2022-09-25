import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);

  useEffect(() => { // initial loading of list of products
    const fetchProducts = async () => {      
      try {
        const response = await fetch('http://localhost:5001/api/products');
        setProducts(await response.json());
      } catch(error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => { // initial loading of list of cart Items
    const fetchCart = async () => {      
      try {
        const response = await fetch('http://localhost:5001/api/cart');
        setCart(await response.json());
      } catch(error) {
        console.log(error);
        alert("Something went wrong :(");
      }
    }

    fetchCart();
  }, []);

  const addToCart = async (id, callback) => {
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: id }),
    }

    console.log(id);

    try {
      const response = await fetch('http://localhost:5001/api/add-to-cart', options );
      const responseObj = await response.json();

      // adding item to cart:
      if (cart.filter(item => item.productId === id).length === 1) {
        // update item
        setCart(
          cart.map(item => id === item.productId ? responseObj.item : item)
        )
      } else {
        // append item to cart
        setCart(cart.concat(responseObj.item));
      }

      // update product in products
      setProducts(
        products.map(product => id === product._id ? responseObj.product : product)
      )

      if (callback) {
        callback();
      } 
    } catch (error) {
      console.log(error);
      alert('Try again later.');
    }
  }

  return (
    <div id="app">
      <Header {...{ cart, setCart }} />
      <Main {...{ products, setProducts }} onAddToCart={addToCart} />  
    </div>
  );
}

export default App;
