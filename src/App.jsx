import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-red-100 h-screen w-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
