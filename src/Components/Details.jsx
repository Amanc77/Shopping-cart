import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Used for redirecting after deletion

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        // Get products from local storage
        const storedProducts =
          JSON.parse(localStorage.getItem("products")) || [];
        const localProduct = storedProducts.find((p) => p.id == id);

        if (localProduct) {
          setProduct(localProduct); // Set from local storage if found
        } else {
          // Fetch from API if not in local storage
          const { data } = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getSingleProduct();
  }, [id]);

  // Delete Product Function
  const productDeleteHandler = (productId) => {
    // Get existing products from local storage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Filter out the product to be deleted
    const updatedProducts = storedProducts.filter((p) => p.id != productId);

    // Update local storage
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Redirect to home after deletion
    navigate("/");
  };

  return product ? (
    <div className="flex h-screen w-full items-center justify-center bg-gray-600">
      <div className="w-[800px] h-[400px] flex justify-center items-center bg-gray-500 shadow-lg rounded-lg p-8">
        {/* Product Image with fixed size */}
        <img
          src={product.image}
          alt={product.title}
          className="w-[250px] h-[250px] object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="ml-8 w-[500px]">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h3 className="text-gray-400 my-3">{product.category}</h3>
          <h2 className="text-orange-700 text-2xl font-semibold mb-3">
            ${product.price}
          </h2>
          <p className="mb-5 text-gray-300 text-sm h-[80px] overflow-hidden">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link
              to={`/edit/${id}`}
              className="py-2 px-5 border rounded-md border-blue-400 text-blue-800 hover:bg-blue-200"
            >
              Edit
            </Link>

            <button
              onClick={() => productDeleteHandler(product.id)}
              className="py-2 px-5 border rounded-md border-red-400 text-red-600 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
