import Product from "./Product";

const ProductListing = ({ products, onUpdate }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {/* provide list of products and map over them */}
      {products.map(product => {
        return <Product key={product._id} {...product} onUpdate={onUpdate} />
      })}
    </div>
  )
}

export default ProductListing;