import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="content w-[50%] flex items-center justify-center space-x-10">
        {/* Product Image */}
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven Backpack"
          className="w-1/3 object-contain"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-4xl">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <h3 className="text-gray-30000 my-5">men's clothing</h3>
          <h2 className="text-orange-900 mb-3">$ 109.95</h2>
          <p className="mb-[5%]">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>

          {/* Buttons */}
          <Link
            to="/edit"
            className="py-2 px-5 border rounded-md border-blue-200 text-blue-800"
          >
            Edit
          </Link>

          <Link
            to="/delete"
            className="py-2 px-5 border rounded-md border-red-200 text-red-600"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
