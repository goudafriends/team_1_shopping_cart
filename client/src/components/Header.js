import CartItems from './CartItems';

const Header = ({ cart, onClick }) => {  // possible props to be added?
  const disabled = cart.length === 0 ? 'disabled' : '';

  // send post /api/checkout  POST request
  // setCart items to an empty array 

  const handleClick = (e) => {
    e.preventDefault();
    if (cart.length > 0) {
      onClick();
    } else {
      alert('There are no items to checkout!');
    }
  }

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
        <a className={`button checkout ${disabled}`} onClick={handleClick}>Checkout</a> 
      </div>
    </header>
  )
}

export default Header;
