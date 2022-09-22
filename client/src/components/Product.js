import { useState } from "react";
import EditForm from "./EditForm";
import ProductActions from "./ProductActions.js"

const Product = ({ title, quantity, price, id }) => { // we may or may not need an id
  const [ isEdit, setIsEdit ] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  } 

  const handleAdd = (e) => {
    e.preventDefault();
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        { isEdit ? 
          <EditForm handleCancel={toggleForm} id={id} title={title} quantity={quantity} price={price}/> : 
          <ProductActions handleAdd={handleAdd} handleEdit={toggleForm}/> }
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
