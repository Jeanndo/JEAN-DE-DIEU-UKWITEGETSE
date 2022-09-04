import React, { Component, Fragment } from "react";
import Navigation from "./../../Navbar/Navbar.js";
import {
  ProductContainer,
  ProductLeftSideDetails,
  ProductRightSideContainer,
  ProductLeftSideImage,
  ProductRightSideImage,
  ProductRightSideDetails,
  RightSideProductBrandName,
  RightSideProductName,
  RightSideProductSizeTitle,
  RightSideProductSizeBoxContainer,
  ProductSizeBox,
  ProductSizeLable,
  RightSideProductColorContainer,
  RightSideProductColorTitle,
  RightSideProductColorBoxContainer,
  RightSideProductColorBox,
  RightSideProductPriceContainer,
  RightSideProductPriceLabel,
  RightSideProductPriceFigures,
  AddToCartButton,
  ProductDescriptionText,
} from "./../../styles/Product.styled.js";
import { connect } from "react-redux";
import { addToCart } from "./../../../Redux/Actions/ActionCreators/shoppingAction.js";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SINGLE_PRODUCT = gql`
  query SingleProduct($productId: String!) {
    product(id: $productId) {
      id
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

const size = [
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

const colors = [
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

class Product extends Component {
  constructor(props) {
    super(props);
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

  handleProductIndex = (index) => {
    this.setState({ productIndex: index });
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
          variables={{ productId: window.location.href.split("/")[4] }}
        >
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading...</h1>;

            if (error) console.log(error);

            const filteredPrice = data.product.prices.filter(
              (item) => item.currency.symbol === this.props.currency.message
            );
            const { amount, currency } = filteredPrice[0];

            return (
              <ProductContainer>
                <ProductLeftSideDetails>
                  {data?.product?.gallery.map((item, index) => (
                    <ProductLeftSideImage
                      src={item}
                      alt="side product"
                      key={index}
                      onClick={() => this.handleProductIndex(index)}
                    />
                  ))}
                </ProductLeftSideDetails>
                <ProductRightSideContainer>
                  <ProductRightSideImage
                    src={data?.product?.gallery[this.state.productIndex]}
                    alt="full product view"
                  />
                  <ProductRightSideDetails>
                    <RightSideProductBrandName>
                      {data?.product?.brand}
                    </RightSideProductBrandName>
                    <RightSideProductName>
                      {data?.product?.name}
                    </RightSideProductName>
                    <RightSideProductSizeTitle>SIZE:</RightSideProductSizeTitle>
                    <RightSideProductSizeBoxContainer>
                      {size.map((item, index) => (
                        <ProductSizeBox key={item.id} index={index}>
                          <ProductSizeLable index={index}>
                            {item.size}
                          </ProductSizeLable>
                        </ProductSizeBox>
                      ))}
                    </RightSideProductSizeBoxContainer>
                    <RightSideProductColorContainer>
                      <RightSideProductColorTitle>
                        COLOR:
                      </RightSideProductColorTitle>
                      <RightSideProductColorBoxContainer>
                        {colors.map((item, index) => (
                          <RightSideProductColorBox
                            key={item.id}
                            bgcolor={item.color}
                            index={index}
                          />
                        ))}
                      </RightSideProductColorBoxContainer>
                      <RightSideProductPriceContainer>
                        <RightSideProductPriceLabel>
                          PRICE:
                        </RightSideProductPriceLabel>
                        <RightSideProductPriceFigures>
                          {currency.symbol}&nbsp;
                          {amount}
                        </RightSideProductPriceFigures>
                      </RightSideProductPriceContainer>
                    </RightSideProductColorContainer>
                    <AddToCartButton
                      onClick={() =>
                        this.props.addToCart(data.product.id, data.product)
                      }
                    >
                      ADD TO CART
                    </AddToCartButton>
                    <ProductDescriptionText>
                      {data?.product?.description}
                    </ProductDescriptionText>
                  </ProductRightSideDetails>
                </ProductRightSideContainer>
              </ProductContainer>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, product) => dispatch(addToCart(id, product)),
  };
};

const mapStateToProps = ({ CurrencyReducer }) => {
  const { currency } = CurrencyReducer;
  return { currency };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
