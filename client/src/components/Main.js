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
    } catch (e) {
      console.log("GET YOUR PIZZA, YOUVE ERRORED")
    }
  }
  
  return (
    <main>
      <ProductListing products={products} setProducts={setProducts}/>
      <AddForm onSubmit={postNewProduct} />
    </main>
   ) 
}

export default Main;
