import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { productsContext } from "../Utils/Context";
import Loading from "../Components/Loading";

function Home() {
  const [products, setProducts] = useContext(productsContext);
  const { search } = useLocation();
  const category = new URLSearchParams(search).get("category");

  // Load data from local storage
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const [filteredProducts, setFilteredProducts] = useState(storedProducts);

  useEffect(() => {
    if (category) {
      const categoryFiltered = storedProducts.filter(
        (p) => p.category === category
      );
      setFilteredProducts(categoryFiltered);
    } else {
      setFilteredProducts(storedProducts);
    }
  }, [category, products]);

  return filteredProducts.length > 0 ? (
    <>
      <Nav className=" h-auto" />
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 p-4">
        {filteredProducts.map((p) => (
          <Link
            to={`/details/${p.id}`}
            key={p.id}
            className="bg-white p-3 border border-gray-300 shadow-lg rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl h-[265px] w-[220px]"
          >
            <div
              className="w-full h-40 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            ></div>

            <h1 className="mt-3 text-center text-gray-900 font-bold text-sm w-full line-clamp-2">
              {p.title}
            </h1>

            <div className="mt-2 text-center text-gray-700 text-xs w-full line-clamp-2">
              {p.description}
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
