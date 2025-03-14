import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Loading Text */}
        <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
