import React, { Component, Fragment } from "react";
import {
  CartCard,
  CartCardLeftSide,
  CartCardRight,
  ProductBrandName,
  ProductName,
  ProductPriceFigures,
  CartActionButtonsContainer,
  CartProductImageContainer,
  CartIncreamentButton,
  CartQuantityBox,
  CartDecreamentButton,
  CartProductImage,
  CartSlideButtonsContainer,
  CartSlidePrevButton,
  CartSlideNextButton,
  ArrowButton,
  RemoveFromCart,
  TrushIconImage,
  ProductAttributesContainer,
  RightSideProductAttributeName,
} from "./../../styles/Cart.styled.js";
import { connect } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
} from "./../../../Redux/Actions/ActionCreators/shoppingAction.js";

import ArrowRight from "./../../../assets/NextButton.png";
import ArrowLeft from "./../../../assets/prevButton.png";
import TrushIcon from "./../../../assets/bin.png";
import ProductAttributes from "./Attributes.js";

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      input: props.product.qty,
      currentIndex: 0,
    };
  }

  handleQuantityIncreament = () => {
    this.setState({
      input: this.state.input + 1,
    });
  };
  handleQuantityDecreament = () => {
    this.setState({
      input: this.state.input - 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.product.qty === this.props.product.qty &&
      prevState.input === this.state.input
    ) {
      return;
    } else {
      this.props.adjustQuantity(this.props.product.id, this.state.input);
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
      <CartCard>
        <CartCardLeftSide>
          <ProductBrandName>{this.props.product.brand}</ProductBrandName>
          <ProductName>{this.props.product.name}</ProductName>
          <ProductPriceFigures>
            {this.props.price.currency.symbol}
            {this.props.price.amount}
          </ProductPriceFigures>

          <ProductAttributesContainer>
            {this.props.attributes.map((attribute, index) => (
              <Fragment>
                <RightSideProductAttributeName>
                  {attribute.name}:
                </RightSideProductAttributeName>
                <ProductAttributes
                  items={attribute.items}
                  type={attribute.type}
                  key={index}
                  productId={this.props.product.id}
                />
              </Fragment>
            ))}
          </ProductAttributesContainer>
          <RemoveFromCart
            onClick={() => this.props.removeFromCart(this.props.product.id)}
          >
            <TrushIconImage src={TrushIcon} alt="trush" />
          </RemoveFromCart>
        </CartCardLeftSide>

        <CartCardRight>
          <CartActionButtonsContainer>
            <CartIncreamentButton onClick={this.handleQuantityIncreament}>
              +
            </CartIncreamentButton>
            <CartQuantityBox>{this.state.input}</CartQuantityBox>

            <CartDecreamentButton
              disabled={this.state.input === 0}
              onClick={this.handleQuantityDecreament}
            >
              -
            </CartDecreamentButton>
          </CartActionButtonsContainer>
          <CartProductImageContainer>
            {this.props?.product.gallery
              ?.slice(this.state.currentIndex, this.state.currentIndex + 1)
              .map((item) => (
                <CartProductImage src={item} alt="cart product " key={item} />
              ))}
            {this.props.product.gallery.length !== 1 && (
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
        </CartCardRight>
      </CartCard>
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
