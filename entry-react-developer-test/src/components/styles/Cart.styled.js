import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  padding: 80px 5% 0 5%;
  @media (max-width: 425px) {
    padding: 0 50px;
  }
  @media (max-width: 320px) {
    padding: 20px;
  }
`;

export const CartTitle = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 160%;
  color: #1d1f22;
`;

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  padding: 20px 0px;
  border-top: 2px solid #e5e5e5;
  @media (max-width: 425px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const CartCardLeftSide = styled.div`
  width: 400px;
  height: 100%;
  @media (max-width: 425px) {
    margin-bottom: 50px;
  }
`;
export const ProductBrandName = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  align-items: center;
  color: #1d1f22;
`;

export const ProductName = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  align-items: center;
  color: #1d1f22;
  margin-top: 16px;
  margin-bottom: 43px;
`;

export const ProductPriceFigures = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  align-items: center;
  color: #1d1f22;
`;

/**Attributes styles***/
export const ProductAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
export const RightSideProductAttributeName = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
  text-transform: uppercase;
`;
export const RightSideProductAttributeBoxContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
`;
export const ProductAttributeBox = styled.div`
  width: 70px;
  height: 35px;
  border: 1px solid #1d1f22;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.selected ? "1px solid #5ECE7B" : "1px solid black"};
  &:not(:last-child) {
    margin-right: 12px;
  }
`;
export const ProductAttributeValue = styled.label`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: ${(props) => (props.index === 1 ? "#fff" : "#1d1f22")};
`;

/**end of attributes styles */

export const CartCardRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 100%;
`;

export const CartActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  width: 15%;
  height: 100%;
  margin-right: 10%;
  @media (max-width: 425px) {
    margin-top: 20px;
    margin-right: 0%;
  }
`;

export const CartIncreamentButton = styled.button`
  display: block;
  width: 100%;
  height: 45px;
  text-align: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  background: #fff;
  @media (max-width: 425px) {
    width: 80%;
    height: 30px;
  }
`;

export const CartQuantityBox = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1d1f22;
  @media (max-width: 425px) {
    width: 80%;
    height: 30px;
  }
`;
export const CartDecreamentButton = styled.button`
  display: block;
  width: 100%;
  height: 45px;
  text-align: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  background: #fff;
  @media (max-width: 425px) {
    width: 80%;
    height: 30px;
  }
`;

export const CartProductImageContainer = styled.div`
  width: 75%;
  height: 100%;
  position: relative;
`;

export const CartProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media (max-width: 425px) {
    width: 100%;
    height: 150px;
  }
`;

export const CartSlideButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 56px;
  height: 24px;
  top: 280px;
  left: 190px;
  @media (max-width: 425px) {
    top: 100px;
    left: 100px;
  }
`;

export const CartSlideNextButton = styled.button`
  width: 18px;
  height: 17.98px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  background: rgba(0, 0, 0, 0.73);
  color: #fff;
  border-style: none;
  outline: none;
`;

export const CartSlidePrevButton = styled.button`
  width: 18px;
  height: 17.98px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  background: rgba(0, 0, 0, 0.73);
  color: #fff;
  border-style: none;
  outline: none;
`;

export const ArrowButton = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
`;

export const CartOrderCard = styled.div`
  width: 100%;
  padding: 32px 0px;
  border-top: 2px solid #e5e5e5;
  margin-top: 100px;
`;
export const CartOrderItemContainer = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const CartOrderTax = styled.span`
  width: 184px;
  height: 28px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #555;
  margin-right: 20px;
`;

export const CartOrderTaxValue = styled.span`
  width: 184px;
  height: 28px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1d1f22;
`;

export const CartOrderQuantity = styled.span`
  width: 184px;
  height: 28px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #555;
  margin-right: 20px;
`;

export const CartOrderQuantityValue = styled.span`
  width: 184px;
  height: 28px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1d1f22;
`;

export const CartOrderTotal = styled.span`
  width: 184px;
  height: 28px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #1d1f22;
  margin-right: 20px;
`;
export const CartOrderTotalValue = styled.span`
  width: 184px;
  height: 28px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1d1f22;
`;

export const CartOrderButton = styled.button`
  border-style: none;
  align-items: center;
  padding: 16px 32px;
  width: 279px;
  height: 52px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
  background: #5ece7b;
`;

/*=====EMPTY CART STYLING=====*/

export const EmptyCart = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: #555;
  margin: 100px 0px;
  font-size: 16px;
  font-weight: 100;
`;

export const RemoveFromCart = styled.button`
  margin-top: 25px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TrushIconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
