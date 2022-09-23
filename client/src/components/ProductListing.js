import Product from "./Product";

const ProductListing = ({ products, onUpdate, onDelete }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {/* provide list of products and map over them */}
      {products.map(product => {
        return <Product key={product._id} {...product} onUpdate={onUpdate} onDelete={onDelete}/>
      })}
    </div>
  )
}

export default ProductListing;