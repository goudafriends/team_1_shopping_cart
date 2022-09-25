import { useState } from "react";
import EditForm from "./EditForm";
import ProductActions from "./ProductActions.js"

const Product = ({ onDelete, onUpdate, onAddToCart, title, quantity, price, _id }) => {
  const [ isEdit, setIsEdit ] = useState(false); // determine if edit form needs to be displayed

  const toggleForm = () => {
    setIsEdit(!isEdit);
  } 

  const handleAdd = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      onAddToCart(_id);
    } else {
      alert("There are no more items!")
    }
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
        <p className="price">${price.toFixed(2)}</p>
        <p className="quantity">{quantity} left in stock</p>
        { isEdit ? 
          <EditForm handleCancel={toggleForm} id={_id} title={title} quantity={quantity} price={price} submitUpdate={handleUpdate}/> : 
          <ProductActions handleAdd={handleAdd} handleEdit={toggleForm} quantity={quantity} /> }
        <a className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
