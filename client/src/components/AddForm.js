import { useState, useEffect} from "react";

const AddForm = ({ setProducts }) => {
  const [ visible, setVisible ] = useState("");

  const handleSubmit = () => {
    // need to save new product to existing list of products
  }

  let showForm = (e) => {
    e.preventDefault();
    // set visible state to visible
    setVisible("visible");
  }

  let hideForm = (e) => {
    e.preventDefault();
    setVisible("");
  }

  return (
    <div className={`add-form ${visible}`}>
      <p><a class="button add-product-button" onClick={showForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      

      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value=""/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value=""/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value=""/>
        </div>

        <div className="actions form-actions">
        <a class="button">Add</a>
            <a class="button" onClick={hideForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddForm;


//  Add functionality: do we need to clear data from AddForm if we are cancelling?