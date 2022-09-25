const ProductActions = ({ handleAdd, handleEdit, quantity }) => {
  const disabled = quantity === 0 ? 'disabled' : '';

  return (
    <div className="actions product-actions">
      <a className={`button add-to-cart ${disabled}`} onClick={handleAdd}>Add to Cart</a>
      <a className="button edit" onClick={handleEdit}>Edit</a>
    </div>
  )
}

export default ProductActions;