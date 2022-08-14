import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  background: #fff;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MiddleContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  position: relative;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavigationItems = styled.span`
  position: relative;
  width: 37px;
  height: 20px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.active ? "#5ece7b" : "#1d1f22")};
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  &:not(:last-child) {
    margin-right: 40px;
  }

  &::after {
    content: " ";
    position: absolute;
    width: 50px;
    height: 3px;
    top: 48px;
    left: 0px;
    background-color: ${(props) => (props.active ? "#5ece7b" : "")};
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const Switcher = styled.select`
  color: black;
  outline: none;
  border-style: none;
  cursor: pointer;
  background-color: #fff;
`;

export const CartContainer = styled.img`
  width: 100px;
  height: 20px;
  object-fit: contain;
  margin-top: 28px;
`;
export const NavbarExtendedContainer = styled.div``;
