import React, { Component } from "react";
import {
  CartCard,
  CartCardLeftSide,
  CartCardRight,
  ProductBrandName,
  ProductName,
  ProductPriceFigures,
  ProductSizeTitle,
  ProductSizeBoxContainer,
  ProductSizeBox,
  ProductSizeLable,
  ProductColorContainer,
  ProductColorTitle,
  ProductColorBoxContainer,
  ProductColorBox,
  CartActionButtonsContainer,
  CartProductImageContainer,
  CartIncreamentButton,
  CartQuantityBox,
  CartDecreamentButton,
  CartProductImage,
  CartSlideButtonsContainer,
  CartSlidePrevButton,
  CartSlideNextButton,
} from "./../../styles/Cart.styled";

class Card extends Component {
  render() {
    return (
      <CartCard>
        <CartCardLeftSide>
          <ProductBrandName>{this.props.brandName}</ProductBrandName>
          <ProductName>{this.props.productName}</ProductName>
          <ProductPriceFigures>{this.props.price}</ProductPriceFigures>
          <ProductSizeTitle>SIZE:</ProductSizeTitle>
          <ProductSizeBoxContainer>
            <ProductSizeBox>
              <ProductSizeLable>{this.props.xs}</ProductSizeLable>
            </ProductSizeBox>
            <ProductSizeBox size="s">
              <ProductSizeLable size="s">{this.props.s}</ProductSizeLable>
            </ProductSizeBox>
            <ProductSizeBox>
              <ProductSizeLable>{this.props.m}</ProductSizeLable>
            </ProductSizeBox>
            <ProductSizeBox>
              <ProductSizeLable>{this.props.l}</ProductSizeLable>
            </ProductSizeBox>
          </ProductSizeBoxContainer>
          <ProductColorContainer>
            <ProductColorTitle>COLOR:</ProductColorTitle>
            <ProductColorBoxContainer>
              <ProductColorBox bgcolor={this.props.color1} />
              <ProductColorBox bgcolor={this.props.color2} />
              <ProductColorBox bgcolor={this.props.color3} />
            </ProductColorBoxContainer>
          </ProductColorContainer>
        </CartCardLeftSide>
        <CartCardRight>
          <CartActionButtonsContainer>
            <CartIncreamentButton>+</CartIncreamentButton>
            <CartQuantityBox>1</CartQuantityBox>
            <CartDecreamentButton>-</CartDecreamentButton>
          </CartActionButtonsContainer>
          <CartProductImageContainer>
            <CartProductImage src={this.props.img} alt="cart product " />
            <CartSlideButtonsContainer>
              <CartSlidePrevButton>←</CartSlidePrevButton>
              <CartSlideNextButton>→</CartSlideNextButton>
            </CartSlideButtonsContainer>
          </CartProductImageContainer>
        </CartCardRight>
      </CartCard>
    );
  }
}

export default Card;
