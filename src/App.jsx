import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import EditProduct from "./Components/EditProduct";

function App() {
  const { search, pathname } = useLocation();
  console.log("Current Path:", pathname, "Search Query:", search);

  let homeLink = null;

  if (pathname !== "/" || search.length > 0) {
    homeLink = (
      <Link
        to="/"
        className=" text-teal-400 font-bold bg-gray-800 flex absolute left-[6.5%] top-[1%] p-2 rounded-md"
      >
        Home
      </Link>
    );
  }

  return (
    <div className="bg-gray-700 h-screen w-full flex overflow-x-hidden">
      {homeLink}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<EditProduct />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
