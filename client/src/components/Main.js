import Product from "./Product";
import data from '../mockData/data';

const Main = () => {
   return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>

        {/* provide list of products and map over them */}
        {data.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>

      <div className="add-form">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value="" />
          </div>

          <div className="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value="" />
          </div>

          <div className="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value="" />
          </div>

          <div className="actions form-actions">
            <a className="button">Add</a>
            <a className="button">Cancel</a>
          </div>
        </form>
      </div>
    </main>
   ) 
}

export default Main;
