import React, { Component } from "react";
import {
  CartContainer,
  CartTitle,
  CartOrderCard,
  CartOrderTax,
  CartOrderTaxValue,
  CartOrderQuantity,
  CartOrderQuantityValue,
  CartOrderItemContainer,
  CartOrderTotal,
  CartOrderTotalValue,
  CartOrderButton,
} from "./../../styles/Cart.styled";
import Image1 from "./../../../assets/Image1.png";
import Glasses from "./../../../assets/glasses.png";
import CartCard from "./Card";

const size1 = [
  {
    id: 1,
    size: "XS",
  },
  {
    id: 2,
    size: "S",
  },
  {
    id: 3,
    size: "M",
  },
  {
    id: 4,
    size: "L",
  },
];

const size2 = [
  {
    id: 1,
    size: "S",
  },
  {
    id: 2,
    size: "M",
  },
];
const cardOneColors = [
  {
    id: 1,
    color: "#D3D2D5",
  },
  {
    id: 2,
    color: "#2B2B2B",
  },
  {
    id: 3,
    color: "#0F6450",
  },
];

const cardTwoColors = [
  {
    id: 1,
    color: "#1D1F22",
  },
  {
    id: 2,
    color: "#15A4C3",
  },
  {
    id: 3,
    color: "#EA8120",
  },
];

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
          colors={cardOneColors}
          size={size1}
        />
        <CartCard
          brandName="Jupiter"
          productName="Wayfarer"
          price="$75.00"
          img={Glasses}
          colors={cardTwoColors}
          size={size2}
        />
        <CartOrderCard>
          <CartOrderItemContainer>
            <CartOrderTax>Tax 21%:</CartOrderTax>
            <CartOrderTaxValue>$42.00</CartOrderTaxValue>
          </CartOrderItemContainer>
          <CartOrderItemContainer>
            <CartOrderQuantity>Quantity:</CartOrderQuantity>
            <CartOrderQuantityValue>3</CartOrderQuantityValue>
          </CartOrderItemContainer>
          <CartOrderItemContainer>
            <CartOrderTotal>Total:</CartOrderTotal>
            <CartOrderTotalValue>$200.00</CartOrderTotalValue>
          </CartOrderItemContainer>
          <CartOrderItemContainer>
            <CartOrderButton>ORDER</CartOrderButton>
          </CartOrderItemContainer>
        </CartOrderCard>
      </CartContainer>
    );
  }
}

export default Cart;
