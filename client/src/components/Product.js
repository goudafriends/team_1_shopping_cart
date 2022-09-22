import { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ title, quantity, price, id }) => { // we may or may not need an id
const [ isEdit, setIsEdit ] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit)  } 
  console.log(title, id)

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        { isEdit ? <EditForm id={id} title={title} quantity={quantity} price={price}/> : null }
        <div className="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit" onClick={handleClick}>Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
        
      </div>
      
    </div>
  )
}

export default Product;
