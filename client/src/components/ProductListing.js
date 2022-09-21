import Product from "./Product";

const ProductListing = ({ products, setProducts }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {/* provide list of products and map over them */}
      {products.map(product => {
        return <Product key={product.id} {...product} />
      })}
    </div>
  )
}

export default ProductListing;