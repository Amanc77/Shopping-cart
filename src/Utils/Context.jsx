import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const productsContext = createContext();

function Context(props) {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <productsContext.Provider value={[product, setProduct]}>
      {props.children}
    </productsContext.Provider>
  );
}

export default Context;
