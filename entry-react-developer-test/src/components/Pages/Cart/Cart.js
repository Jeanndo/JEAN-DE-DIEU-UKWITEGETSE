import React, { Component } from "react";
import {
  CartContainer,
  CartTitle,
  CardOrderCard,
} from "./../../styles/Cart.styled";
import Image1 from "./../../../assets/Image1.png";
import Glasses from "./../../../assets/glasses.png";

import CartCard from "./Card";

class Cart extends Component {
  render() {
    return (
      <CartContainer>
        <CartTitle>CART</CartTitle>
        <CartCard
          brandName="Appollo"
          productName="Running Short"
          price="$50.00"
          img={Image1}
          color1="#D3D2D5"
          color2="#2B2B2B"
          color3="#0F6450"
          xs="XS"
          s="S"
          m="M"
          l="L"
        />
        <CartCard
          brandName="Jupiter"
          productName="Wayfarer"
          price="$75.00"
          img={Glasses}
          color1="#1D1F22"
          color2="#15A4C3"
          color3=" #EA8120"
          s="S"
          m="M"
        />
        <CardOrderCard></CardOrderCard>
      </CartContainer>
    );
  }
}

export default Cart;
