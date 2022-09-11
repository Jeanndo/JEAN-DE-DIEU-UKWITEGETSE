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
  CartSlideButtonsContainer,
  CartSlideNextButton,
  CartSlidePrevButton,
  ArrowButton,
} from "./../styles/Overlay.styled.js";
import { connect } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
} from "./../../Redux/Actions/ActionCreators/shoppingAction.js";
import ArrowRight from "./../../assets/NextButton.png";
import ArrowLeft from "./../../assets/prevButton.png";

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      input: props.product.qty,
      currentIndex: 0,
    };
  }
  handleQuantityIncreament = () => {
    this.setState({ input: this.state.input + 1 });
  };
  handleQuantityDecreament = () => {
    this.setState({ input: this.state.input - 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.props.adjustQuantity(this.props.product.id, this.state.input);
    } else {
      return;
    }
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex !== this.props?.product?.gallery.length - 1
          ? prevState.currentIndex + 1
          : prevState.currentIndex,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex !== -1
          ? prevState.currentIndex - 1
          : prevState.currentIndex,
    }));
  };
  handleChange = (event) => {
    this.props.adjustQuantity(this.props.product.id, event.target.value);
  };

  render() {
    return (
      <CardContainer>
        <CardLeftSide>
          <ProductBrandName>{this.props.product.brand}</ProductBrandName>
          <ProductName>{this.props.product.name}</ProductName>
          <ProductPrice>
            {this.props.price.currency.symbol}
            {this.props.price.amount}
          </ProductPrice>
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
            <CartIncreamentButton onClick={this.handleQuantityIncreament}>
              +
            </CartIncreamentButton>
            <CartQuantityBox
              type="number"
              value={this.state.input}
              onChange={this.handleChange}
              min="1"
            />
            <CartDecreamentButton
              disabled={this.state.input === 0}
              onClick={this.handleQuantityDecreament}
            >
              -
            </CartDecreamentButton>
          </CartActionButtonsContainer>
          <CartProductImageContainer>
            {this.props.product.gallery
              .slice(this.state.currentIndex, this.state.currentIndex + 1)
              .map((item) => (
                <CartProductImage src={item} alt="product pic" key={item} />
              ))}
            {this.props?.product.gallery.length !== 1 && (
              <CartSlideButtonsContainer>
                <CartSlidePrevButton
                  disabled={this.state.currentIndex === 0 ? true : false}
                  onClick={this.handlePrev}
                >
                  <ArrowButton src={ArrowLeft} alt="arrow left" />
                </CartSlidePrevButton>

                <CartSlideNextButton
                  disabled={
                    this.state.currentIndex ===
                    this.props?.product.gallery.length - 1
                      ? true
                      : false
                  }
                  onClick={this.handleNext}
                >
                  <ArrowButton src={ArrowRight} alt="arrow right" />
                </CartSlideNextButton>
              </CartSlideButtonsContainer>
            )}
          </CartProductImageContainer>
        </CardRightSide>
      </CardContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
