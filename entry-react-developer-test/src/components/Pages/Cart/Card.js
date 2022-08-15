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
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  handleQuantityIncreament() {
    this.setState({ quantity: this.state.quantity + 1 });
  }
  handleQuantityDecreament() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  render() {
    return (
      <CartCard>
        <CartCardLeftSide>
          <ProductBrandName>{this.props.brandName}</ProductBrandName>
          <ProductName>{this.props.productName}</ProductName>
          <ProductPriceFigures>{this.props.price}</ProductPriceFigures>
          <ProductSizeTitle>SIZE:</ProductSizeTitle>
          <ProductSizeBoxContainer>
            {this.props.size.map((item, index) => (
              <ProductSizeBox
                key={item.id}
                size={item.size === "S" ? "S" : ""}
                index={index}
              >
                <ProductSizeLable
                  size={item.size === "S" ? "S" : ""}
                  index={index}
                >
                  {item.size}
                </ProductSizeLable>
              </ProductSizeBox>
            ))}
          </ProductSizeBoxContainer>
          <ProductColorContainer>
            <ProductColorTitle>COLOR:</ProductColorTitle>
            <ProductColorBoxContainer>
              {this.props.colors.map((item, index) => (
                <ProductColorBox
                  key={item.id}
                  bgcolor={item.color}
                  index={index}
                />
              ))}
            </ProductColorBoxContainer>
          </ProductColorContainer>
        </CartCardLeftSide>
        <CartCardRight>
          <CartActionButtonsContainer>
            <CartIncreamentButton
              onClick={() => {
                this.setState({
                  quantity: this.state.quantity + 1,
                });
              }}
            >
              +
            </CartIncreamentButton>
            <CartQuantityBox>{this.state.quantity}</CartQuantityBox>
            <CartDecreamentButton
              onClick={() => {
                this.setState({
                  quantity: this.state.quantity - 1,
                });
              }}
            >
              -
            </CartDecreamentButton>
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
