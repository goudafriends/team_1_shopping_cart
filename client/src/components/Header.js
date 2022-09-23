import { useState, useEffect } from 'react';
import CartItems from './CartItems';

const Header = () => {  // possible props to be added?
  const [cart, setCart] = useState([]);

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
  
  return (
      <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        { cart.length === 0 ? 
        <>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        </> :
        <CartItems cart={cart}/>
        }
        <a className="button checkout disabled">Checkout</a> 
      </div>
    </header>
  )
}

export default Header;

//// enable button once product has been added
// .button.checkout {
//   background: #fff;
//   color: #07575b;
// }

// .button.disabled {
//   background: #ccc;
//   color: #fff;
//   cursor: auto;
// }

// .button.checkout {
//   margin-top: 20px;
//   float: right;
// }

/*
1. add to cart
2. disabled button


*/