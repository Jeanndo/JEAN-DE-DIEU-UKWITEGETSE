import React, { Component, Fragment } from "react";
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
  EmptyCart,
} from "./../../styles/Cart.styled.js";
import CartCard from "./Card.js";
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

// const size2 = [
//   {
//     id: 1,
//     size: "S",
//   },
//   {
//     id: 2,
//     size: "M",
//   },
// ];
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

// const cardTwoColors = [
//   {
//     id: 1,
//     color: "#1D1F22",
//   },
//   {
//     id: 2,
//     color: "#15A4C3",
//   },
//   {
//     id: 3,
//     color: "#EA8120",
//   },
// ];

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      productIndex: 0,
      categoryName: "all",
      quantity: 1,
      totalPrice: 0,
      totalItems: 0,
      colorIndex: props.color.message.index,
      productId: props.color.message.prodId,
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

    this.setState({
      colorIndex: this.props.color.message.index,
      productId: this.props.color.message.prodId,
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
        <CartContainer onClick={this.props.closeSwitcher}>
          <CartTitle>CART</CartTitle>

          {this.props.products.length === 0 ? (
            <EmptyCart>Empty Cart !!!</EmptyCart>
          ) : (
            this.props.products.map((product, index) => {
              const filteredPrice = product.prices.filter(
                (item) =>
                  item.currency.symbol === this.props.currency.message.symbol
              );
              return (
                <CartCard
                  key={product.id}
                  price={filteredPrice[0]}
                  product={product}
                  colors={cardOneColors}
                  colorIndex={this.state.colorIndex}
                  productId={this.state.productId}
                  size={size1}
                />
              );
            })
          )}
          <CartOrderCard>
            <CartOrderItemContainer>
              <CartOrderTax>Tax 21%:</CartOrderTax>
              <CartOrderTaxValue>
                {this.props.currency.message.symbol} &nbsp;
                {((this.state.totalPrice * 21) / 100).toFixed(2)}
              </CartOrderTaxValue>
            </CartOrderItemContainer>
            <CartOrderItemContainer>
              <CartOrderQuantity>Quantity:</CartOrderQuantity>
              <CartOrderQuantityValue>
                {this.state.totalItems}
              </CartOrderQuantityValue>
            </CartOrderItemContainer>
            <CartOrderItemContainer>
              <CartOrderTotal>Total:</CartOrderTotal>
              <CartOrderTotalValue>
                {this.props.currency.message.symbol}
                &nbsp;
                {this.state.totalPrice.toFixed(2)}
              </CartOrderTotalValue>
            </CartOrderItemContainer>
            <CartOrderItemContainer>
              <CartOrderButton>ORDER</CartOrderButton>
            </CartOrderItemContainer>
          </CartOrderCard>
        </CartContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.shopping.cart,
    currency: state.CurrencyReducer.currency,
    color: state.ColorReducer.color,
  };
};
export default connect(mapStateToProps)(Cart);
