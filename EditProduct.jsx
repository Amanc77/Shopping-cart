import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const localProduct = storedProducts.find((p) => p.id == id);

    if (localProduct) {
      setProduct(localProduct);
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    storedProducts = storedProducts.map((p) => (p.id == id ? product : p));

    localStorage.setItem("products", JSON.stringify(storedProducts));
    navigate(`/details/${id}`);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-700">
      <div className="w-[800px] h-[500px] flex bg-gray-600 shadow-lg rounded-lg p-8">
        {/* Left Side: Product Image */}
        <div className="w-[40%] flex flex-col items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-[200px] h-[200px] object-cover rounded-lg mb-3"
          />
          {/* Image URL Input */}
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter Image URL"
            className="p-2 w-[90%] rounded bg-gray-500 text-white text-center"
          />
        </div>

        {/* Right Side: Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="w-[60%] flex flex-col justify-center px-6"
        >
          <label className="text-white mb-1">Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="p-2 mb-3 rounded bg-gray-500 text-white"
          />

          <label className="text-white mb-1">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="p-2 mb-3 rounded bg-gray-500 text-white"
          />

          <label className="text-white mb-1">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="p-2 mb-3 rounded bg-gray-500 text-white"
          />

          <label className="text-white mb-1">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="p-2 mb-3 rounded bg-gray-500 text-white h-[60px]"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
