import { useState, useEffect} from "react";

const AddForm = ({ onSubmit }) => {
  const [ visible, setVisible ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ quantity, setQuantity ] = useState("");

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

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    setVisible("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = getValidProduct({ title, price, quantity });

    if (newProduct) {
      onSubmit(newProduct, resetForm);
    }
  }

  let showForm = (e) => {
    e.preventDefault();
    setVisible("visible");
  }

  let hideForm = (e) => {
    e.preventDefault();
    resetForm();
  }

  return (
    <div className={`add-form ${visible}`}>
      <p><a className="button add-product-button" onClick={showForm}>Add A Product</a></p>
      <h3>Add Product</h3>
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
          <a className="button" onClick={handleSubmit}>Add</a>
          <a className="button" onClick={hideForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddForm;


//  Add functionality: do we need to clear data from AddForm if we are cancelling?