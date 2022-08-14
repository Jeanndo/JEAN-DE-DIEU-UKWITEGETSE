import React, { Component, Fragment } from "react";
import {
  CategoryContainer,
  CategoryName,
  ProductContainer,
  ProductCard,
  ProductImage,
  CardContent,
  CardContentTitle,
  CardContentPrice,
  CardCartIcon,
} from "./../../styles/Category.styled";
import Image1 from "./../../../assets/Image1.png";
import Image2 from "./../../../assets/Image2.png";
import Image3 from "./../../../assets/Image3.png";
import Image4 from "./../../../assets/Image4.png";
import Image5 from "./../../../assets/Image5.png";
import CartIcon from "./../../../assets/CircleIcon.png";

class Category extends Component {
  render() {
    return (
      <Fragment>
        <CategoryContainer>
          <CategoryName>Category name</CategoryName>
          <ProductContainer>
            <ProductCard>
              <ProductImage src={Image1} alt="product image1" />
              <CardCartIcon src={CartIcon} alt="cart icon" />
              <CardContent>
                <CardContentTitle>Apollo Running Short</CardContentTitle>
                <CardContentPrice>$50.00</CardContentPrice>
              </CardContent>
            </ProductCard>
            <ProductCard>
              <ProductImage src={Image2} alt="product image2" />
              <CardCartIcon src={CartIcon} alt="cart icon" />
              <CardContent>
                <CardContentTitle>Apollo Running Short</CardContentTitle>
                <CardContentPrice>$50.00</CardContentPrice>
              </CardContent>
            </ProductCard>
            <ProductCard>
              <ProductImage src={Image3} alt="product image" />
              <CardCartIcon src={CartIcon} alt="cart icon" />
              <CardContent>
                <CardContentTitle>Apollo Running Short</CardContentTitle>
                <CardContentPrice>$50.00</CardContentPrice>
              </CardContent>
            </ProductCard>
          </ProductContainer>
          <ProductContainer>
            <ProductCard>
              <ProductImage src={Image4} alt="product image1" />
              <CardCartIcon src={CartIcon} alt="cart icon" />
              <CardContent>
                <CardContentTitle>Apollo Running Short</CardContentTitle>
                <CardContentPrice>$50.00</CardContentPrice>
              </CardContent>
            </ProductCard>
            <ProductCard>
              <ProductImage src={Image1} alt="product image2" />
              <CardCartIcon src={CartIcon} alt="cart icon" />
              <CardContent>
                <CardContentTitle>Apollo Running Short</CardContentTitle>
                <CardContentPrice>$50.00</CardContentPrice>
              </CardContent>
            </ProductCard>
            <ProductCard>
              <ProductImage src={Image5} alt="product image" />
              <CardCartIcon src={CartIcon} alt="cart icon" />
              <CardContent>
                <CardContentTitle>Apollo Running Short</CardContentTitle>
                <CardContentPrice>$50.00</CardContentPrice>
              </CardContent>
            </ProductCard>
          </ProductContainer>
        </CategoryContainer>
      </Fragment>
    );
  }
}

export default Category;
