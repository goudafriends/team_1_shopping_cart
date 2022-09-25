import CartItem from './CartItem';

const CartItems = ({ cart }) => {
  const total = cart.reduce((sum, item) => {
    sum += (item.price * item.quantity);
    return sum;
  }, 0);
  
  return (
    <table className="cart-items">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {cart.map(cartItem => {
        return <CartItem key={cartItem._id} {...cartItem} />
      })}
      <tr>
        <td colspan="3" class="total">Total: ${total.toFixed(2)}</td>
      </tr>
    </table>
  )  
}

export default CartItems;


