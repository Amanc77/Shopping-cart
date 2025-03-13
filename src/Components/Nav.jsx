import React from "react";

function Nav() {
  return (
    <nav className="h-screen w-[20%] bg-white shadow-md p-4">
      <button className="w-full bg-blue-100 text-blue-600 py-2 px-4 rounded-md border border-blue-300 mb-4">
        Add New Product
      </button>

      <h2 className="font-semibold text-lg mb-2">Category Filter</h2>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
          <span>cat 1</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span>cat 1</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          <span>cat 1</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
