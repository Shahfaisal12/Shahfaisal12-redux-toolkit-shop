import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "../Layout/Base";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import MyCart from "../../components/elements/Cart";

const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
