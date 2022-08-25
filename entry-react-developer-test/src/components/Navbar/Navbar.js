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
} from "./../styles/Navbar.styled.js";
import CartOverlay from "./CartOverLay.js";
import LogoImg from "./../../assets/a-logo.png";
import Cart from "./../../assets/EmptyCart.png";
import { CurrencySwitcher } from "./Switcher.js";
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
    };
  }

  handleShowCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };

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
                      <NavigationItems
                        active={this?.props?.state?.isAll}
                        onClick={this?.props?.handleAllTab}
                      >
                        ALL
                      </NavigationItems>

                      <NavigationItems
                        active={this?.props?.state?.isClothes}
                        onClick={this?.props?.handleClothesTab}
                      >
                        CLOTHES
                      </NavigationItems>
                      <NavigationItems
                        active={this?.props?.state?.isTech}
                        onClick={this?.props?.handleTechTab}
                      >
                        TECH
                      </NavigationItems>
                    </NavbarLinkContainer>
                  </LeftContainer>
                  <MiddleContainer>
                    <Logo src={LogoImg} alt="logo" />
                  </MiddleContainer>
                  <RightContainer>
                    <CurrencySwitcher />
                    <CartContainer
                      src={Cart}
                      alt="cart"
                      onClick={this.handleShowCart}
                    />
                    <CartItemNumber>30</CartItemNumber>
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

export default Navbar;
