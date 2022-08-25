import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../components/Pages/Category/Category.js";
import Product from "../components/Pages/Product/Product.js";
import Cart from "../components/Pages/Cart/Cart.js";

class MyRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
  }
}

export default MyRoutes;
