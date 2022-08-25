import React, { Component, Fragment } from "react";
import {
  NavbarContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  Logo,
  Switcher,
  CartContainer,
  NavigationItems,
  CartItemNumber,
  OpenLinksButton,
} from "./../styles/Navbar.styled";
import CartOverlay from "./CartOverLay";
import LogoImg from "./../../assets/a-logo.png";
import Cart from "./../../assets/EmptyCart.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isWomen: true,
      isMen: false,
      isKids: false,
      showCart: false,
    };
  }

  handleWomenTab = () => {
    this.setState({
      isWomen: true,
      isMen: false,
      isKids: false,
    });
  };

  handleMenTab = () => {
    this.setState({
      isWomen: false,
      isMen: true,
      isKids: false,
    });
  };

  handleKidsTab = () => {
    this.setState({
      isWomen: false,
      isMen: false,
      isKids: true,
    });
  };

  handleShowCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };

  render() {
    return (
      <Fragment>
        <NavbarContainer>
          {this.state.showCart && <CartOverlay />}
          <NavbarInnerContainer>
            <LeftContainer>
              <NavbarLinkContainer>
                <NavigationItems
                  active={this.state.isWomen}
                  onClick={this.handleWomenTab}
                >
                  WOMEN
                </NavigationItems>
                <NavigationItems
                  active={this.state.isMen}
                  onClick={this.handleMenTab}
                >
                  MEN
                </NavigationItems>
                <NavigationItems
                  active={this.state.isKids}
                  onClick={this.handleKidsTab}
                >
                  KIDS
                </NavigationItems>
              </NavbarLinkContainer>
            </LeftContainer>
            <MiddleContainer>
              <Logo src={LogoImg} alt="logo" />
            </MiddleContainer>
            <RightContainer>
              <Switcher>
                <option value="$">$</option>
                <option value="$">$ USD</option>
                <option value="€">€ EUR</option>
                <option value="£">￥JPY</option>
              </Switcher>
              <CartContainer
                src={Cart}
                alt="cart"
                onClick={this.handleShowCart}
              />
              <CartItemNumber>30</CartItemNumber>
            </RightContainer>
            {/* <OpenLinksButton>&#8801;</OpenLinksButton> */}
          </NavbarInnerContainer>
          <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
      </Fragment>
    );
  }
}

export default Navbar;
