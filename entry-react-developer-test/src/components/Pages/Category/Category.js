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
  OutOfStockOverlay,
  OutOfStockText,
  ProductPagination,
  PaginationContainer,
  PaginationActionButton,
  ArrowButton,
} from "./../../styles/Category.styled.js";
import Navigation from "./../../Navbar/Navbar.js";
import CartIcon from "./../../../assets/CircleIcon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./../../../Redux/Actions/ActionCreators/shoppingAction.js";
import PrevButton from "./../../../assets/prevButton.png";
import NextButton from "./../../../assets/NextButton.png";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getAllCategories = gql`
  query AllCategories {
    categories {
      name
      products {
        id
        name
        inStock
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        gallery
      }
    }
  }
`;

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      currentIndex: 0,
      productsPerPage: 6,
      skip: 6,
      isAll: true,
      isClothes: false,
      isTech: false,
      categoryName: "all",
    };
  }

  handleHover = () => {
    this.setState({ isHovered: true });
  };
  handelLeave = () => {
    this.setState({ isHovered: false });
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - this.state.skip,
      productsPerPage: prevState.productsPerPage - this.state.skip,
    }));
    console.log("content", this.state.productsPerPage);
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + this.state.skip,
      productsPerPage: prevState.productsPerPage + this.state.skip,
    }));

    console.log("content", this.state.productsPerPage);
  };

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.categoryName !== this.state.categoryName) {
      this.setState({
        currentIndex: 0,
        productsPerPage: 6,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation
          handleAllCategoriesTab={this.handleAllCategoriesTab}
          handleClothesTab={this.handleClothesTab}
          handleTechTab={this.handleTechTab}
          state={this.state}
        />
        <Query query={getAllCategories}>
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading ...</h1>;
            if (error) console.log(error);

            const filteredData = data.categories.filter(
              (category) => category.name === this.state.categoryName
            );
            return (
              <>
                <CategoryContainer>
                  <CategoryName>{this.state.categoryName}</CategoryName>
                  <ProductContainer>
                    {filteredData[0].products
                      ?.slice(
                        this.state.currentIndex,
                        this.state.currentIndex + this.state.skip
                      )
                      .map((product) => {
                        const filteredPrice = product.prices.filter(
                          (price) =>
                            price.currency.label === this.props.currency.message
                        );
                        const { amount, currency } = filteredPrice[0];
                        return (
                          <ProductCard
                            key={product.id}
                            outOfStock={product.inStock}
                            onMouseOver={this.handleHover}
                            onMouseLeave={this.handelLeave}
                          >
                            <Link to={`/product/${product?.id}`}>
                              <ProductImage
                                src={product.gallery[0]}
                                alt={product.name}
                              />
                            </Link>
                            <CardCartIcon
                              src={CartIcon}
                              alt="cart icon"
                              isHovered={this.state.isHovered}
                              onClick={() =>
                                this.props.addToCart(product.id, product)
                              }
                            />
                            <CardContent>
                              <CardContentTitle>
                                {product.name}
                              </CardContentTitle>
                              <CardContentPrice>
                                {currency.symbol}&nbsp;
                                {amount}
                              </CardContentPrice>
                            </CardContent>
                            {product.inStock && (
                              <OutOfStockOverlay>
                                <OutOfStockText>OUT OF STOCK</OutOfStockText>
                              </OutOfStockOverlay>
                            )}
                          </ProductCard>
                        );
                      })}
                  </ProductContainer>
                  <ProductPagination>
                    <PaginationContainer>
                      {this.state.currentIndex !== 0 && (
                        <PaginationActionButton
                          prevBtn={true}
                          disabled={
                            this.state.currentIndex === 0 ? true : false
                          }
                          onClick={this.handlePrev}
                        >
                          <ArrowButton src={PrevButton} alt="arrow left" />
                        </PaginationActionButton>
                      )}

                      {filteredData[0].products.length - 1 >=
                        this.state.productsPerPage && (
                        <PaginationActionButton
                          nextBtn={true}
                          disabled={
                            this.state.productsPerPage >=
                            filteredData[0].products.length - 1
                              ? true
                              : false
                          }
                          onClick={this.handleNext}
                        >
                          <ArrowButton src={NextButton} alt="arrow right" />
                        </PaginationActionButton>
                      )}
                    </PaginationContainer>
                  </ProductPagination>
                </CategoryContainer>
              </>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ CurrencyReducer }) => {
  const { currency } = CurrencyReducer;

  return { currency };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, product) => dispatch(addToCart(id, product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
