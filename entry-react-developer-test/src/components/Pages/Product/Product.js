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
  constructor() {
    super();
    this.state = {
      productIndex: 0,
    };
  }

  handleProductIndex = (index) => {
    this.setState({ productIndex: index });

    console.log("index", this.state.productIndex);
  };

  render() {
    return (
      <Fragment>
        <Navigation />
        <Query
          query={SINGLE_PRODUCT}
          variables={{ productId: localStorage.getItem("productId") }}
        >
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading...</h1>;

            if (error) console.log(error);

            return (
              <ProductContainer>
                <ProductLeftSideDetails>
                  {data?.product?.gallery?.map((item, index) => (
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
                          $50.00
                        </RightSideProductPriceFigures>
                      </RightSideProductPriceContainer>
                    </RightSideProductColorContainer>
                    <AddToCartButton>ADD TO CART</AddToCartButton>
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

export default Product;
