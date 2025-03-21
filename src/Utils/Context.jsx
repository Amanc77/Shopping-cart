import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const productsContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(products);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <productsContext.Provider value={[products, setProducts]}>
      {props.children}
    </productsContext.Provider>
  );
}

export default Context;
