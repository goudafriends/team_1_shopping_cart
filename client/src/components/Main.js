import { useState, useEffect} from "react";
import AddForm from "./AddForm";
import ProductListing from "./ProductListing";
import data from '../mockData/data';

const Main = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => { // initial loading of list of products
    setProducts(data);
  }, []);
  
  return (
    <main>
      <ProductListing products={products} setProducts={setProducts}/>
      <AddForm products= {products} setProducts={setProducts}/>
    </main>
   ) 
}

export default Main;
