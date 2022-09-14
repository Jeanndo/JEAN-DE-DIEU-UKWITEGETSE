import React, { Component, Fragment } from "react";
import {
  OverlayContainer,
  OverlayShow,
  CartTitle,
  CartItemNumber,
  TotalCostContainer,
  TotalLabels,
  CheckoutActionButtonContainer,
  CheckoutActionButton,
  EmptyCart,
} from "./../styles/Overlay.styled.js";
import { Link } from "react-router-dom";
import Card from "./OverLayCard.js";
import { connect } from "react-redux";

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
  constructor(props) {
    super();
    this.state = {
      quantity: 1,
      totalPrice: 0,
      totalItems: 0,
    };
  }

  componentDidMount() {
    let items = 0;
    let price = 0;

    this.props.products.forEach((item) => {
      items += item.qty;
      if (items > 0) {
        price +=
          item.qty *
          item.prices.filter(
            (price) =>
              price.currency.symbol === this.props.currency.message.symbol
          )[0].amount;
      }
    });
    this.setState({
      totalItems: items,
    });
    this.setState({
      totalPrice: price,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let items = 0;
    let price = 0;

    if (
      (prevState.totalItems === this.state.totalItems ||
        prevState.totalPrice === this.state.totalPrice) &&
      prevProps !== this.props
    ) {
      this.props.products.forEach((item) => {
        items += item.qty;
        if (items > 0) {
          price +=
            item.qty *
            item.prices.filter(
              (price) =>
                price.currency.symbol === this.props.currency.message.symbol
            )[0].amount;
        }
      });
      this.setState({
        totalItems: items,
      });
      this.setState({
        totalPrice: price,
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <Fragment>
        <OverlayShow onClick={this.props.hideCart}></OverlayShow>
        <OverlayContainer>
          <CartTitle>
            My Bag,
            <CartItemNumber>{this.state.totalItems} items</CartItemNumber>
          </CartTitle>

          {this.props.products.length === 0 ? (
            <EmptyCart>Empty Cart !!!</EmptyCart>
          ) : (
            this.props.products.map((product, index) => {
              const filteredPrice = product.prices.filter(
                (item) =>
                  item.currency.symbol === this.props.currency.message.symbol
              );
              return (
                <Card
                  key={product.id}
                  price={filteredPrice[0]}
                  product={product}
                  size={size1}
                  colors={index % 2 === 0 ? cardTwoColors : cardOneColors}
                />
              );
            })
          )}
          <TotalCostContainer>
            <TotalLabels>Total</TotalLabels>
            <TotalLabels>
              {this.props.currency.message.symbol}
              &nbsp;
              {this.state.totalPrice.toFixed(2)}
            </TotalLabels>
          </TotalCostContainer>
          <CheckoutActionButtonContainer>
            <Link to="/cart">
              <CheckoutActionButton
                bgcolor="#ffffff"
                borderColor="#000000"
                onClick={this.props.hideCart}
              >
                View Bag
              </CheckoutActionButton>
            </Link>

            <CheckoutActionButton
              bgcolor="#5ECE7B"
              borderColor="#5ECE7B"
              color="#ffffff"
            >
              check out
            </CheckoutActionButton>
          </CheckoutActionButtonContainer>
        </OverlayContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.shopping.cart,
    currency: state.CurrencyReducer.currency,
  };
};

export default connect(mapStateToProps)(CartOverlay);
