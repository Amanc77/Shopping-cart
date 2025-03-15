import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getSingleProduct();
  }, [id]);

  return product ? (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="content w-[60%] flex items-center bg-white shadow-lg rounded-lg p-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-1/3 object-contain rounded-lg"
        />

        {/* Product Details */}
        <div className="ml-8">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h3 className="text-gray-500 my-3">{product.category}</h3>
          <h2 className="text-orange-700 text-2xl font-semibold mb-3">
            ${product.price}
          </h2>
          <p className="mb-5 text-gray-700">{product.description}</p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/edit"
              className="py-2 px-5 border rounded-md border-blue-400 text-blue-800 hover:bg-blue-200"
            >
              Edit
            </Link>

            <Link
              to="/delete"
              className="py-2 px-5 border rounded-md border-red-400 text-red-600 hover:bg-red-200"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
