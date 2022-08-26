import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  padding: 0px 50px;
  background: #fff;
  @media (max-width: 425px) {
    padding: 0px;
    background: #5ece7b;
  }
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  @media (max-width: 425px) {
    display: none;
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  flex: 30%;
  align-items: center;
  justify-content: flex-start;
`;

export const MiddleContainer = styled.div`
  flex: 30%;
  align-items: center;
  padding-left: 5%;
  position: relative;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 425px) {
    flex-direction: column;
    margin-top: 50px;
    justify-content: flex-start;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 30px;
  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    align-items: left;
    padding-left: 40%;
    margin-top: 10px;
  }
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
export const NavigationItems = styled.span`
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
  color: #000;
  color: ${(props) => (props.active ? "#5ece7b" : "")};
  cursor: pointer;
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

  @media (max-width: 425px) {
    &::after {
      top: 20px;
      left: 0px;
    }
    &:not(:last-child) {
      margin-right: 40px;
      margin-bottom: 10px;
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  @media (max-width: 425px) {
    left: 45%;
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
  position: absolute;
  border-radius: 100%;
  padding: 5px;
  top: 10px;
  left: 395px;
  background: #1d1f22;
  color: #fff;
  z-index: -1;
  @media (max-width: 1024px) {
    top: 7px;
    left: 255px;
  }
  @media (max-width: 425px) {
    top: 70px;
    left: 200px;
  }
`;

export const MenuBar = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  font-size: 45px;
  cursor: pointer;
  right: 0px;
  position: absolute;
  top: 10px;
`;

export const NavbarExtendedContainer = styled.div``;
