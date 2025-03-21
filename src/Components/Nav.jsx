import React from "react";
import { useContext } from "react";
import { productsContext } from "../Utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(productsContext);
  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  //console.log(distinctCategory);
  const bgColor = () => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  //console.log(bgColor());

  return (
    <nav className=" min-full w-[20%] bg-gray-600 shadow-md p-4 pt-15 ">
      <Link
        to="/Create"
        className="w-full bg-blue-100 text-blue-600 py-2 px-4 rounded-md border border-blue-300 mb-4 flex justify-center "
      >
        Add New Product
      </Link>

      <h2 className="font-semibold  mb-2 text-amber-100 text-2xl">
        Category Filter
      </h2>
      {distinctCategory.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-2">
          <Link
            to={`/?category=${category}`}
            className="flex items-center space-x-2 text-emerald-200 text-lg font-bold hover:text-blue-400"
          >
            <span
              style={{ backgroundColor: bgColor() }}
              className="w-3 h-3 rounded-full"
            ></span>
            <span>{category}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Nav;
