import React, { Component, Fragment } from "react";
import {
  ProductContainer,
  RightSideContainer,
  RightSideProductBrandName,
  RightSideProductName,
  RightSideProductAttributeName,
  RightSideProductPriceContainer,
  RightSideProductPriceLabel,
  RightSideProductPriceFigures,
  AddToCartButton,
  ProductDescriptionText,
  LeftSideContainer,
  LeftSideInnerContainer,
  LeftSideInnerProductGallery,
  LeftSideInnerProductGalleryImage,
  LeftSideInnerMainProductContainer,
  LeftSideInnerMainProductImage,
  ProductAttributesContainer,
} from "./../../styles/Product.styled.js";
import ProductAttributes from "./Attributes.js";
import { connect } from "react-redux";
import { addToCart } from "./../../../Redux/Actions/ActionCreators/shoppingAction.js";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SINGLE_PRODUCT = gql`
  query SingleProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      brand
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
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productIndex: 0,
      isAll: true,
      isClothes: false,
      isTech: false,
    };
  }

  handleProductIndex = (index) => {
    this.setState({ productIndex: index });
  };

  render() {
    return (
      <Fragment>
        <Query
          query={SINGLE_PRODUCT}
          variables={{ productId: window.location.href.split("/")[4] }}
        >
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading...</h1>;

            if (error) console.log(error);

            const filteredPrice = data.product.prices.filter(
              (item) =>
                item.currency.symbol === this.props.currency.message.symbol
            );
            const { amount, currency } = filteredPrice[0];

            return (
              <ProductContainer onClick={this.props.closeSwitcher}>
                <LeftSideContainer>
                  <LeftSideInnerContainer>
                    <LeftSideInnerProductGallery>
                      {data?.product?.gallery.map((item, index) => (
                        <LeftSideInnerProductGalleryImage
                          key={item}
                          src={item}
                          alt="product gallery image"
                          onClick={() => this.handleProductIndex(index)}
                        />
                      ))}
                    </LeftSideInnerProductGallery>
                    <LeftSideInnerMainProductContainer>
                      <LeftSideInnerMainProductImage
                        src={data?.product?.gallery[this.state.productIndex]}
                        alt="main product image"
                      />
                    </LeftSideInnerMainProductContainer>
                  </LeftSideInnerContainer>
                </LeftSideContainer>
                <RightSideContainer>
                  <RightSideProductBrandName>
                    {data?.product?.brand}
                  </RightSideProductBrandName>
                  <RightSideProductName>
                    {data?.product?.name}
                  </RightSideProductName>
                  <ProductAttributesContainer>
                    {data.product.attributes.map((attribute, index) => (
                      <Fragment>
                        <RightSideProductAttributeName key={attribute.id}>
                          {attribute.name}:
                        </RightSideProductAttributeName>
                        <ProductAttributes
                          items={attribute.items}
                          type={attribute.type}
                          key={index}
                          productId={data?.product?.id}
                        />
                      </Fragment>
                    ))}
                  </ProductAttributesContainer>

                  <RightSideProductPriceContainer>
                    <RightSideProductPriceLabel>
                      PRICE:
                    </RightSideProductPriceLabel>
                    <RightSideProductPriceFigures>
                      {currency.symbol}&nbsp;
                      {amount}
                    </RightSideProductPriceFigures>
                  </RightSideProductPriceContainer>
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
                </RightSideContainer>
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
