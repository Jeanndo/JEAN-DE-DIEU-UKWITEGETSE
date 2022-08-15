import React, { Component } from "react";
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
} from "./../../styles/Product.styled";
import Image1 from "./../../../assets/Image1.png";

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
  render() {
    return (
      <ProductContainer>
        <ProductLeftSideDetails>
          <ProductLeftSideImage src={Image1} alt="side product" />
          <ProductLeftSideImage src={Image1} alt="side product" />
          <ProductLeftSideImage src={Image1} alt="side product" />
        </ProductLeftSideDetails>
        <ProductRightSideContainer>
          <ProductRightSideImage src={Image1} alt="full product view" />
          <ProductRightSideDetails>
            <RightSideProductBrandName>Apollo</RightSideProductBrandName>
            <RightSideProductName>Running Short</RightSideProductName>
            <RightSideProductSizeTitle>SIZE:</RightSideProductSizeTitle>
            <RightSideProductSizeBoxContainer>
              {size.map((item, index) => (
                <ProductSizeBox key={item.id} index={index}>
                  <ProductSizeLable index={index}>{item.size}</ProductSizeLable>
                </ProductSizeBox>
              ))}
            </RightSideProductSizeBoxContainer>
            <RightSideProductColorContainer>
              <RightSideProductColorTitle>COLOR:</RightSideProductColorTitle>
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
                <RightSideProductPriceLabel>PRICE:</RightSideProductPriceLabel>
                <RightSideProductPriceFigures>
                  $50.00
                </RightSideProductPriceFigures>
              </RightSideProductPriceContainer>
            </RightSideProductColorContainer>
            <AddToCartButton>ADD TO CART</AddToCartButton>
            <ProductDescriptionText>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </ProductDescriptionText>
          </ProductRightSideDetails>
        </ProductRightSideContainer>
      </ProductContainer>
    );
  }
}

export default Product;
