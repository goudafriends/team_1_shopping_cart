import { useState, useEffect} from "react";
import AddForm from "./AddForm";
import ProductListing from "./ProductListing";
// import data from '../mockData/data';

const Main = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => { // initial loading of list of products
    const fetchProducts = async () => {      
      try {
        const response = await fetch('http://localhost:5001/api/products');
        setProducts(await response.json());
      } catch(error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  const postNewProduct = async (newProduct, callback) => {
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    }

    try {
      const response = await fetch('http://localhost:5001/api/products', options);
      setProducts(products.concat(await response.json()));
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log("GET YOUR PIZZA, YOUVE ERRORED");
    }
  }

  const putProduct = async (id, product, callback) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(product), 
    }

    try {
      const response = await fetch(`http://localhost:5001/api/products/${id}`, options);
      const updatedProduct = await response.json();
      setProducts(
        products.map(product => id === product._id ? updatedProduct : product)
      )
      if (callback) {
        callback();
      } 
    } catch (error) {
      console.log(error);
    }
  }
  
  const deleteProduct = async (id, callback) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try {
      const response = await fetch(`http://localhost:5001/api/products/${id}`, options);
      
      setProducts(
        products.filter(product => product._id !== id)
      )
      if (callback) {
        callback();
      } 
    } catch(error) {
      alert('Sorry, try again.');
    }
  }

  return (
    <main>
      <ProductListing products={products} setProducts={setProducts} onUpdate={putProduct} onDelete={deleteProduct} />
      <AddForm onSubmit={postNewProduct} />
    </main>
   ) 
}

export default Main;


// send the delete request to the api
// from products state list filter out the product
// that we deleted and update our state to rerender