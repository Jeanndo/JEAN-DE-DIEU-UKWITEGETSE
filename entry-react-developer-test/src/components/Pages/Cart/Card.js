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
} from "./../../styles/Cart.styled.js";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      currentIndex: 1,
    };
  }

  handleQuantityIncreament() {
    this.setState({ quantity: this.state.quantity + 1 });
  }
  handleQuantityDecreament() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  handleChange = (event) => {
    console.log(event.target.value);
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex !== this.props?.products.length - 1
          ? prevState.currentIndex + 1
          : prevState.currentIndex,
    }));
    // this.setState({
    //   currentIndex:
    //     this.state.currentIndex !== this.props?.products.length - 1
    //       ? this.state.currentIndex + 1
    //       : this.state.currentIndex,
    // });
    console.log(this.state.currentIndex);
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex !== -1
          ? prevState.currentIndex - 1
          : prevState.currentIndex,
    }));

    // this.setState({
    //   currentIndex:
    //     this.state.currentIndex !== -1
    //       ? this.state.currentIndex - 1
    //       : this.state.currentIndex,
    // });
    console.log(this.state.currentIndex);
  };

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
            <CartQuantityBox
              type="number"
              defaultValue={this.state.quantity}
              onchange={this.handleChange}
            />
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
            {this.props?.products
              ?.slice(this.state.currentIndex - 1, this.state.currentIndex)
              .map((item, index) => (
                <CartProductImage src={item} alt="cart product " key={index} />
              ))}
            <CartSlideButtonsContainer>
              {this.state.currentIndex !== 1 && (
                <CartSlidePrevButton onClick={this.handlePrev}>
                  ←
                </CartSlidePrevButton>
              )}
              {this.state.currentIndex !== this.props?.products.length - 1 && (
                <CartSlideNextButton onClick={this.handleNext}>
                  →
                </CartSlideNextButton>
              )}
            </CartSlideButtonsContainer>
          </CartProductImageContainer>
        </CartCardRight>
      </CartCard>
    );
  }
}

export default Card;
