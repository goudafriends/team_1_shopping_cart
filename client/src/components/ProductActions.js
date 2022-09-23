const ProductActions = ({handleAdd, handleEdit}) => {
  return (
    <div className="actions product-actions">
      <a className="button add-to-cart" onClick={handleAdd}>Add to Cart</a>
      <a className="button edit" onClick={handleEdit}>Edit</a>
    </div>
  )
}

export default ProductActions;