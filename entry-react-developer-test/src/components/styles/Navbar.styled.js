import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
export const NavbarLink = styled(NavLink)`
  position: relative;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => (props.active ? "#5ece7b" : "#000")};
  font-weight: ${(props) => (props.active ? 600 : 400)};
  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 48px;
    left: 0px;
    background-color: ${(props) => (props.active ? "#5ece7b" : "")};
  }
  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 425px) {
    &::after {
      top: 20px;
      left: 0px;
    }
  }
`;
export const NavbarLinkExtended = styled(NavLink)`
  position: relative;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => (props.active ? "#5ece7b" : "#000")};
  font-weight: ${(props) => (props.active ? 600 : 400)};
`;
export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const ShowMobileNav = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
export const Switcher = styled.select`
  color: black;
  outline: none;
  border-style: none;
  cursor: pointer;
  @media (max-width: 425px) {
    margin-top: 40px;
    margin-left: 150px;
    width: 100px;
  }
`;

export const CartContainer = styled.img`
  width: 100px;
  height: 20px;
  object-fit: contain;
  margin-top: 28px;
  cursor: pointer;
  @media (max-width: 425px) {
    margin-top: 30px;
    margin-left: 150px;
  }
`;

export const CartItemNumber = styled.span`
  text-align: center;
  width: max-content;
  height: max-content;
  position: absolute;
  border-radius: 100%;
  padding: 5px;
  top: 5px;
  right: 80px;
  background: #1d1f22;
  color: #fff;
  z-index: -1;
  @media (min-width: 700px) {
    top: 0px;
    margin-left: 405px;
  }
  @media (max-width: 1024px) {
    top: 7px;
    left: 255px;
  }
  @media (max-width: 425px) {
    top: 70px;
    left: 200px;
  }
`;

export const ExtendedNavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  background: #f3f3f3;
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
