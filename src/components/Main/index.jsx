import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import NotFound from "../NotFound";

const Main = () => {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
