import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Nav from "../Components/Nav";
import { productsContext } from "../Utils/Context";
import Loading from "../Components/Loading";

function Home() {
  const [products] = useContext(productsContext);

  return products ? (
    <>
      <Nav />
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        {/* Product Card */}
        {products.map((p, i) => (
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
