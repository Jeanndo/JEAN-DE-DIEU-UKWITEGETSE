import React, { Component } from "react";
import Image1 from "./../../assets/Image1.png";
import Image2 from "./../../assets/glasses.png";
import {
  OverlayContainer,
  OverlayShow,
  CartTitle,
  CartItemNumber,
  TotalCostContainer,
  TotalLabels,
  CheckoutActionButtonContainer,
  CheckoutActionButton,
} from "./../styles/Overlay.styled.js";

import Card from "./OverLayCard.js";

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
class CartOverlay extends Component {
  render() {
    return (
      <OverlayShow>
        <OverlayContainer>
          <CartTitle>
            My Bag, <CartItemNumber>3 items</CartItemNumber>
          </CartTitle>
          <Card
            brandName="Appolo"
            productName="Running Short"
            price="$50.00"
            size={size1}
            colors={cardOneColors}
            Image={Image1}
          />
          <Card
            brandName="Jupiter"
            productName="Wayfarer"
            price="$75.00"
            size={size2}
            colors={cardTwoColors}
            Image={Image2}
          />
          <TotalCostContainer>
            <TotalLabels>Total</TotalLabels>
            <TotalLabels>$200.00</TotalLabels>
          </TotalCostContainer>
          <CheckoutActionButtonContainer>
            <CheckoutActionButton bgcolor="#ffffff" borderColor="#000000">
              View Bag
            </CheckoutActionButton>
            <CheckoutActionButton
              bgcolor="#5ECE7B"
              borderColor="#5ECE7B"
              color="#ffffff"
            >
              check out
            </CheckoutActionButton>
          </CheckoutActionButtonContainer>
        </OverlayContainer>
      </OverlayShow>
    );
  }
}

export default CartOverlay;
