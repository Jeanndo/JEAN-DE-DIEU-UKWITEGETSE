import React, { Component, Fragment } from "react";
import Navigation from "./../../Navbar/Navbar.js";
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
} from "./../../styles/Cart.styled.js";
import CartCard from "./Card.js";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SINGLE_PRODUCT = gql`
  query SingleProduct($productId: String!) {
    product(id: $productId) {
      name
      inStock
      gallery
      description
      category
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;

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
  constructor(props) {
    super();
    this.state = {
      productIndex: 0,
      isAll: true,
      isClothes: false,
      isTech: false,
      categoryName: "all",
    };
  }

  handleAllCategoriesTab = () => {
    this.setState({
      isAll: true,
      isClothes: false,
      isTech: false,
      categoryName: "all",
    });
  };

  handleClothesTab = () => {
    this.setState({
      isAll: false,
      isClothes: true,
      isTech: false,
      categoryName: "clothes",
    });
  };

  handleTechTab = () => {
    this.setState({
      isAll: false,
      isClothes: false,
      isTech: true,
      categoryName: "tech",
    });
  };

  render() {
    return (
      <Fragment>
        <Navigation
          handleAllCategoriesTab={this.handleAllCategoriesTab}
          handleClothesTab={this.handleClothesTab}
          handleTechTab={this.handleTechTab}
          state={this.state}
        />
        <Query
          query={SINGLE_PRODUCT}
          variables={{ productId: "huarache-x-stussy-le" }}
        >
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading...</h1>;
            if (error) console.log(error);

            console.log("data", data);
            return (
              <CartContainer>
                <CartTitle>CART</CartTitle>
                <CartCard
                  brandName={data?.product?.brand}
                  productName={data?.product?.name}
                  price="$50.00"
                  products={data?.product?.gallery}
                  colors={cardOneColors}
                  size={size1}
                />
                <CartCard
                  brandName={data?.product?.brand}
                  productName={data?.product?.name}
                  price="$50.00"
                  products={data?.product?.gallery}
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
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Cart;
