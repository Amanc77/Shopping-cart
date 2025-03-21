import React, { useState, useContext } from "react";
import { productsContext } from "../Utils/Context";
import { nanoid } from "nanoid";

function Create() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useContext(productsContext);

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5 ||
      category.trim().length < 5
    ) {
      alert(
        "All fields must be filled out and have a minimum length of 5 characters."
      );
      return;
    }

    const newProduct = {
      id: nanoid(),
      title,
      image,
      price,
      description,
      category,
    };

    setProducts([...products, newProduct]);
    console.log(newProduct);

    submitAlert();
  };

  const submitAlert = () => {
    alert("Product added successfully!");
  };

  return (
    <>
      <form
        onSubmit={addProductHandler}
        className="flex flex-col items-center h-screen w-screen p-[5%]"
      >
        <h1 className="text-yellow-200 text-3xl font-bold font-sans w-1/2 mb-4">
          Add to Cart
        </h1>

        <input
          className="text-2 bg-gray-800 w-1/2 rounded-md text-white p-2 mb-2"
          type="url"
          placeholder="Image link"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <input
          className="text-2 bg-gray-800 w-1/2 rounded-md text-white p-2 mb-2"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <div className="w-1/2 flex justify-between">
          <input
            className="text-2 bg-gray-800 w-[48%] rounded-md text-white p-2 mb-2"
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            className="text-2 bg-gray-800 w-[48%] rounded-md text-white p-2 mb-2"
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <textarea
          className="text-2x bg-gray-800 w-1/2 rounded-md text-white p-2 mb-2"
          placeholder="Enter product description here."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          rows={8}
        />

        <div className="w-1/2">
          <button
            type="submit"
            className="flex items-center w-auto bg-gray-900 text-pink-300 py-2 px-4 rounded-md border border-gray-500 mb-4 justify-center"
          >
            Add New Product
          </button>
        </div>
      </form>
    </>
  );
}

export default Create;
