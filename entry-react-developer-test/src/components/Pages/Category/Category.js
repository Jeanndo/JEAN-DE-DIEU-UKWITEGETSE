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
} from "./../../styles/Category.styled.js";
import Navigation from "./../../Navbar/Navbar.js";
import CartIcon from "./../../../assets/CircleIcon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./../../../Redux/Actions/ActionCreators/shoppingAction.js";
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
      currentPage: 1,
      productsPerPage: 6,
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
    this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
  };

  handleNext = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
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

            // console.log("categoryPage", this.props);
            const filteredData = data.categories.filter(
              (category) => category.name === this.state.categoryName
            );

            let currencyLabel;
            const { message } = this.props.currency;

            if (message) {
              currencyLabel = message;
            } else {
              currencyLabel = "USD";
            }

            return (
              <>
                <CategoryContainer>
                  <CategoryName>{this.state.categoryName}</CategoryName>
                  <ProductContainer>
                    {filteredData[0].products?.map((product) => {
                      const filteredPrice = product.prices.filter(
                        (price) => price.currency.label === currencyLabel
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
                            <CardContentTitle>{product.name}</CardContentTitle>
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
                      <PaginationActionButton
                        disabled={this.state.currentPage === 0 ? true : false}
                        onClick={() => {
                          this.setState({
                            currentPage: this.state.currentPage - 1,
                          });
                        }}
                      >
                        Prev
                      </PaginationActionButton>
                      <div> {this.state.currentPage}</div>
                      <PaginationActionButton
                        disabled={
                          this.state.currentPage ===
                          filteredData[0].products.length - 1
                            ? true
                            : false
                        }
                        onClick={() => {
                          this.setState({
                            currentPage: this.state.currentPage + 1,
                          });
                        }}
                      >
                        Next
                      </PaginationActionButton>
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
