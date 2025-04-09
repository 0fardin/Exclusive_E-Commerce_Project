import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Applayout from "./Pages/Applayout";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
