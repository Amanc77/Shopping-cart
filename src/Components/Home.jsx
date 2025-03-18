import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import { productsContext } from "../Utils/Context";
import Loading from "../Components/Loading";

function Home() {
  const [products] = useContext(productsContext);
  const { search } = useLocation();
  const category = new URLSearchParams(search).get("category");
  //console.log("Selected Category:", category);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      // console.log("Fetched Category Data:", data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (category) {
      getProductCategory();
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  //console.log("Filtered Products:", filteredProducts);

  return filteredProducts ? (
    <>
      <Nav />
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        {/* Product Card */}
        {filteredProducts.map((p, i) => (
          <Link
            to={`details/${p.id}`}
            key={i}
            className="card bg-white p-3 border border-gray-300 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {/* Product Image */}
            <div
              className="w-full h-40 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            ></div>

            {/* Product Title */}
            <h1 className="mt-2 text-center text-gray-800 font-semibold text-sm truncate w-full">
              {p.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
