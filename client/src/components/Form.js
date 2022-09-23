import { useState, useEffect} from "react";

const Form = ({ submitter, onCancel, submitButtonLabel, product }) =>  {
  const [ title, setTitle ] = useState(product ? product.title : "");
  const [ price, setPrice ] = useState(product ? product.price : "");
  const [ quantity, setQuantity ] = useState(product ? product.quantity : "");
  
  const getValidProduct = ({ title, price, quantity }) => {
    price = parseFloat(price);
    quantity = parseInt(quantity, 10); // "" NaN
    if (title.length === 0) {
      alert("Title Must Be Provided.");
      return;
    } else if (Number.isNaN(price)) {
      alert("Invalid Price: Please enter a number");
      return;
    } else if (Number.isNaN(quantity)) {
      alert("Please Enter a Valid Number");
      return;
    } else {
      return { title, price, quantity };
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = getValidProduct({ title, price, quantity });
    if (newProduct) {
      submitter(newProduct, resetForm);
    }
  }

  const handleCancel = (e) => {
    e.preventDefault;
    resetForm();
    onCancel();
  }

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  }
  
  return (
    <form>
      <div className="input-group">
        <label for="product-name">Product Name</label>
        <input 
          type="text" 
          id="product-name" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="input-group">
        <label for="product-price">Price</label>
        <input 
          type="text" 
          id="product-price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="input-group">
        <label for="product-quantity">Quantity</label>
        <input 
          type="text" 
          id="product-quantity" 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)} />

      </div>

      <div className="actions form-actions">
        <a className="button" onClick={handleSubmit}>{submitButtonLabel}</a>
        <a className="button" onClick={handleCancel}>Cancel</a>
      </div>
    </form>      
  )
}

export default Form;
