import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="shopping" element={<Shopping />} />
      </Route>
    </Routes>
  );
}

export default App;
