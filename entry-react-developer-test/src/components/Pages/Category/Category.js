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
      categoryName: this.props.categoryName.message.category,
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
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + this.state.skip,
      productsPerPage: prevState.productsPerPage + this.state.skip,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryName !== this.props.categoryName) {
      this.setState({
        currentIndex: 0,
        productsPerPage: 6,
        categoryName: this.props.categoryName.message.category,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Query query={getAllCategories}>
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading ...</h1>;
            if (error) console.log(error);
            console.log("products", data);
            const filteredData = data.categories.filter(
              (category) =>
                category.name === this.props.categoryName.message.category
            );
            return (
              <>
                <CategoryContainer>
                  <CategoryName>
                    {this.props.categoryName.message.category}
                  </CategoryName>
                  <ProductContainer>
                    {filteredData[0].products
                      // ?.slice(
                      //   this.state.currentIndex,
                      //   this.state.currentIndex + this.state.skip
                      // )
                      .map((product) => {
                        const filteredPrice = product.prices.filter(
                          (price) =>
                            price.currency.symbol ===
                            this.props.currency.message
                        );
                        const { amount, currency } = filteredPrice[0];
                        return (
                          <ProductCard
                            key={product.id}
                            inStock={product.inStock}
                          >
                            <Link to={`/product/${product?.id}`}>
                              <ProductImage
                                src={product.gallery[0]}
                                alt={product.name}
                              />
                            </Link>
                            {product.inStock && (
                              <CardCartIcon
                                src={CartIcon}
                                alt="cart icon"
                                onClick={() =>
                                  this.props.addToCart(product.id, product)
                                }
                              />
                            )}
                            <CardContent>
                              <CardContentTitle>
                                {product.name}
                              </CardContentTitle>
                              <CardContentPrice>
                                {currency.symbol}&nbsp;
                                {amount}
                              </CardContentPrice>
                            </CardContent>
                            {!product.inStock && (
                              <OutOfStockOverlay>
                                <OutOfStockText>OUT OF STOCK</OutOfStockText>
                              </OutOfStockOverlay>
                            )}
                          </ProductCard>
                        );
                      })}
                  </ProductContainer>
                  {/* <ProductPagination>
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
                  </ProductPagination> */}
                </CategoryContainer>
              </>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ CurrencyReducer, CategoryNameReducer }) => {
  const { currency } = CurrencyReducer;
  const { categoryName } = CategoryNameReducer;
  return { currency, categoryName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, product) => dispatch(addToCart(id, product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
