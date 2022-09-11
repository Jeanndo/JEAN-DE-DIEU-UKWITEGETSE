import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../components/Pages/Category/Category.js";
import Product from "../components/Pages/Product/Product.js";
import Cart from "../components/Pages/Cart/Cart.js";

class MyRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={<Category closeSwitcher={this.props.closeSwitcher} />}
        />
        <Route
          path={`/product/:${this.props.id}`}
          element={<Product closeSwitcher={this.props.closeSwitcher} />}
        />
        <Route
          path="/cart"
          element={<Cart closeSwitcher={this.props.closeSwitcher} />}
        />
      </Routes>
    );
  }
}

export default MyRoutes;
