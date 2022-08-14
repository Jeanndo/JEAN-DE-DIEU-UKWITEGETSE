import React, { Component } from "react";
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
} from "./../styles/Navbar.styled";
import LogoImg from "./../../assets/a-logo.png";
import Cart from "./../../assets/EmptyCart.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isWomen: true,
      isMen: false,
      isKids: false,
    };
  }

  handleWomenTab() {
    this.setState({
      isWomen: true,
      isMen: false,
      isKids: false,
    });
  }

  handleMenTab() {
    this.setState({
      isWomen: false,
      isMen: true,
      isKids: false,
    });
  }

  handleKidsTab() {
    this.setState({
      isWomen: false,
      isMen: false,
      isKids: true,
    });
  }

  render() {
    return (
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavigationItems
                active={this.state.isWomen}
                onClick={() => {
                  this.setState({
                    isWomen: true,
                    isMen: false,
                    isKids: false,
                  });
                }}
              >
                WOMEN
              </NavigationItems>
              <NavigationItems
                active={this.state.isMen}
                onClick={() => {
                  this.setState({
                    isWomen: false,
                    isMen: true,
                    isKids: false,
                  });
                }}
              >
                MEN
              </NavigationItems>
              <NavigationItems
                active={this.state.isKids}
                onClick={() => {
                  this.setState({
                    isWomen: false,
                    isMen: false,
                    isKids: true,
                  });
                }}
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
            <CartContainer src={Cart} alt="cart" />
          </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
