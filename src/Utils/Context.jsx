import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const productsContext = createContext();

function Context(props) {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

      if (storedProducts.length > 0) {
        setProducts(storedProducts);
      } else {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data)); // Save fetched data
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
