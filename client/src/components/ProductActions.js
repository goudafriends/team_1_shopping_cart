const ProductActions = ({handleAdd, handleEdit}) => {
  return (
    <div className="actions product-actions">
      <a class="button add-to-cart" onClick={handleAdd}>Add to Cart</a>
      <a class="button edit" onClick={handleEdit}>Edit</a>
    </div>
  )
}

export default ProductActions;