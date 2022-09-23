import Form from "./Form";

const EditForm = ({ handleCancel, submitUpdate, id, title, quantity, price }) => {
    
  const handleEdit = async (updatedProduct) => {
    try {
      await submitUpdate(id, updatedProduct); // send post request, update products
    } catch (error) {
      console.log(error);
      alert("Try again later.")
    }
  } 

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <Form submitter={handleEdit} onCancel={handleCancel} product={{title, quantity, price}} submitButtonLabel="Edit" />
    </div>
  )
}

export default EditForm;
