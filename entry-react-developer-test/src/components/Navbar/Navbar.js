import React, { Component, Fragment } from "react";
import {
  NavbarContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  Logo,
  CartContainer,
  NavigationItems,
  CartItemNumber,
  MenuBar,
  NavbarLink,
} from "./../styles/Navbar.styled.js";
import CartOverlay from "./CartOverLay.js";
import LogoImg from "./../../assets/a-logo.png";
import Cart from "./../../assets/shoppingCart.png";
import CurrencySwitcher from "./Switcher.js";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getAllCategories = gql`
  query AllCategories {
    categories {
      name
      products {
        id
      }
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cartCount: 0,
    };
  }

  handleShowCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };

  componentDidMount() {
    let count = 0;

    this?.props?.cart?.forEach((item) => {
      count += item.qty;
    });

    this.setState({
      cartCount: count,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    let count = 0;

    if (
      prevState.cartCount === this.state.cartCount &&
      prevProps !== this.props
    ) {
      this?.props?.cart?.forEach((item) => {
        count += item.qty;
      });

      this.setState({
        cartCount: count,
      });
    } else return;
  }

  render() {
    return (
      <Fragment>
        <Query query={getAllCategories}>
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading ...</h1>;
            if (error) console.log(error);
            return (
              <NavbarContainer>
                {this.state.showCart && <CartOverlay />}
                <NavbarInnerContainer>
                  <LeftContainer>
                    <NavbarLinkContainer>
                      <NavbarLink to="/">
                        <NavigationItems
                          active={this?.props?.state?.isAll}
                          onClick={this?.props?.handleAllCategoriesTab}
                        >
                          ALL
                        </NavigationItems>
                      </NavbarLink>
                      <NavbarLink to="/">
                        <NavigationItems
                          active={this?.props?.state?.isClothes}
                          onClick={this?.props?.handleClothesTab}
                        >
                          CLOTHES
                        </NavigationItems>
                      </NavbarLink>
                      <NavbarLink to="/">
                        <NavigationItems
                          active={this?.props?.state?.isTech}
                          onClick={this?.props?.handleTechTab}
                        >
                          TECH
                        </NavigationItems>
                      </NavbarLink>
                    </NavbarLinkContainer>
                  </LeftContainer>
                  <MiddleContainer>
                    <NavbarLink to="/">
                      <Logo src={LogoImg} alt="logo" />
                    </NavbarLink>
                  </MiddleContainer>
                  <RightContainer>
                    <CurrencySwitcher />
                    <CartContainer
                      src={Cart}
                      alt="cart"
                      onClick={this.handleShowCart}
                    />
                    <CartItemNumber>{this.state.cartCount}</CartItemNumber>
                  </RightContainer>
                </NavbarInnerContainer>
                <MenuBar>&#8801;</MenuBar>
              </NavbarContainer>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shopping.cart,
  };
};
export default connect(mapStateToProps)(Navbar);
