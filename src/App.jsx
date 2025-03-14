import React from "react";

import Home from "./Components/Home";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-300 h-screen w-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
