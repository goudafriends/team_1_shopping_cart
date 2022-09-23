import { useState, useEffect} from "react";
import Form from "./Form";

const AddForm = ({ onSubmit }) => {
  const [ visible, setVisible ] = useState("");

  let showForm = (e) => {
    e.preventDefault();
    setVisible("visible");
  }

  const handleSubmit = async (newItem, callback) => {
    try {
      await onSubmit(newItem, callback);
      setVisible("");
    } catch(error) {
      console.log(error);
      alert("Try again later!");
    }
  }

  const hideForm = () => {
    setVisible("");
  }

  return (
    <div className={`add-form ${visible}`}>
      <p><a className="button add-product-button" onClick={showForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <Form submitter={handleSubmit} onCancel={hideForm} submitButtonLabel="Add" />
    </div>
  )
}

export default AddForm;
