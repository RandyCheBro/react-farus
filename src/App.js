import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScienceAndTechnology from "./pages/ScienceAndTechnology";
import Engineering from "./pages/Engineering";

import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <Header />
      <Routes>
        <Route path="/" element={<ScienceAndTechnology />} />
        <Route path="/engineering" element={<Engineering />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
