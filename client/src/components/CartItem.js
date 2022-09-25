const CartItem = ({title, price, quantity}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price.toFixed(2)}</td>
    </tr>
  )
}

export default CartItem;