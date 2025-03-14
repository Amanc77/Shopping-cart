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
      <div className="w-[85%] p-2 pt-2 flex flex-wrap overflow-x-hidden overflow-y-auto gap-x-15 gap-y-3">
        {/* Product Card */}
        {products.map((p, i) => (
          <Link
            to="/Details"
            className="mr-3 mb-3 card p-2 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center  "
          >
            <div
              className="  w-full h-full bg-contain bg-no-repeat bg-center hover:scale-110"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300 h-10">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
