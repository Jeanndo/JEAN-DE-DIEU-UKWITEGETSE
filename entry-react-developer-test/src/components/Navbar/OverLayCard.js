import React, { Component } from "react";
import {
  CardContainer,
  CardLeftSide,
  CardRightSide,
  ProductBrandName,
  ProductName,
  ProductPrice,
  ProductSizeTitle,
  ProductSizeBoxContainer,
  ProductSizeBox,
  ProductSizeLable,
  ProductColorContainer,
  ProductColorTitle,
  ProductColorBoxContainer,
  ProductColorBox,
  CartActionButtonsContainer,
  CartIncreamentButton,
  CartQuantityBox,
  CartDecreamentButton,
  CartProductImageContainer,
  CartProductImage,
} from "./../styles/Overlay.styled";

class Card extends Component {
  render() {
    return (
      <CardContainer>
        <CardLeftSide>
          <ProductBrandName>{this.props.brandName}</ProductBrandName>
          <ProductName>{this.props.ProductName}</ProductName>
          <ProductPrice>{this.props.price}</ProductPrice>
          <ProductSizeTitle>SIZE:</ProductSizeTitle>
          <ProductSizeBoxContainer>
            {this.props.size.map((item, index) => (
              <ProductSizeBox key={item.id} index={index}>
                <ProductSizeLable index={index}>{item.size}</ProductSizeLable>
              </ProductSizeBox>
            ))}
          </ProductSizeBoxContainer>
          <ProductColorContainer>
            <ProductColorTitle>color:</ProductColorTitle>
            <ProductColorBoxContainer>
              {this.props.colors.map((item, index) => (
                <ProductColorBox
                  bgcolor={item.color}
                  key={item.id}
                  index={index}
                />
              ))}
            </ProductColorBoxContainer>
          </ProductColorContainer>
        </CardLeftSide>
        <CardRightSide>
          <CartActionButtonsContainer>
            <CartIncreamentButton>+</CartIncreamentButton>
            <CartQuantityBox>1</CartQuantityBox>
            <CartDecreamentButton>-</CartDecreamentButton>
          </CartActionButtonsContainer>
          <CartProductImageContainer>
            <CartProductImage src={this.props.Image} alt="product pic" />
          </CartProductImageContainer>
        </CardRightSide>
      </CardContainer>
    );
  }
}

export default Card;
