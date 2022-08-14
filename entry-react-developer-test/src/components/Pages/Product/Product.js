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
              <ProductSizeBox>
                <ProductSizeLable>XS</ProductSizeLable>
              </ProductSizeBox>
              <ProductSizeBox size="s">
                <ProductSizeLable size="s">S</ProductSizeLable>
              </ProductSizeBox>
              <ProductSizeBox>
                <ProductSizeLable>M</ProductSizeLable>
              </ProductSizeBox>
              <ProductSizeBox>
                <ProductSizeLable>L</ProductSizeLable>
              </ProductSizeBox>
            </RightSideProductSizeBoxContainer>
            <RightSideProductColorContainer>
              <RightSideProductColorTitle>COLOR:</RightSideProductColorTitle>
              <RightSideProductColorBoxContainer>
                <RightSideProductColorBox bgcolor="#D3D2D5" />
                <RightSideProductColorBox bgcolor="#2B2B2B" />
                <RightSideProductColorBox bgcolor=" #0F6450" />
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
