import { useState, useEffect} from "react";
import AddForm from "./AddForm";
import ProductListing from "./ProductListing";
// import data from '../mockData/data';

const Main = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => { // initial loading of list of products
    // fetch from api
      // fetching is async and useEffect callback cannot be async
      // define async function to call within useEffect callback
    // set products state

    const fetchProducts = async () => {      
      try {
        const response = await fetch('http://localhost:5001/api/products');
        setProducts(await response.json())
      } catch(error) {
        console.log(error);
      }
    }
    
    fetchProducts();

    // setProducts(products);
  }, []);
  
  return (
    <main>
      <ProductListing products={products} setProducts={setProducts}/>
      <AddForm products= {products} setProducts={setProducts}/>
    </main>
   ) 
}

export default Main;


// fetch('http://example.com/movies.json')
//   .then((response) => response.json()) // response = await fetch(requestURL) 
//   .then((data) => console.log(data));  //
