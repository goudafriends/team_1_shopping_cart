import { useState } from "react";
import EditForm from "./EditForm";
import ProductActions from "./ProductActions.js"

const Product = ({ onDelete, onUpdate, title, quantity, price, _id }) => {
  const [ isEdit, setIsEdit ] = useState(false); // determine if edit form needs to be displayed

  const toggleForm = () => {
    setIsEdit(!isEdit);
  } 

  const handleAdd = (e) => {
    e.preventDefault();
    // if quantity > 0
      // post request to api/carts with item id
        // if successful
          // decrement quantity on product --> update product in products
          // add item to cart -> update cartitem in cart
            // if id exists in cart, update item
            // if id does not exist in cart, add item to cart
        // if not
          // alert 'try again later!'
    // if quantity <= 0
      // alert 'there are no more items!'
  }

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  }

  const handleUpdate = (id, product) => {
    onUpdate(id, product, toggleForm);
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        { isEdit ? 
          <EditForm handleCancel={toggleForm} id={_id} title={title} quantity={quantity} price={price} submitUpdate={handleUpdate}/> : 
          <ProductActions handleAdd={handleAdd} handleEdit={toggleForm}/> }
        <a className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
