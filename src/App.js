import React, { useState, useEffect } from "react";
import { data } from "./data.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./Error.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
