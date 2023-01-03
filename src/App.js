import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photography from "./components/photography";
import Experience from "./components/experience";
import React from "react";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
