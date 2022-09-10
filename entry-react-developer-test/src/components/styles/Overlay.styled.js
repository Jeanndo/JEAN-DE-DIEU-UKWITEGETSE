import styled from "styled-components";

export const OverlayShow = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 80px;
  background: rgba(57, 55, 72, 0.22);
  z-index: 1;
  @media (max-width: 425px) {
    top: 80px;
  }
`;

export const OverlayContainer = styled.div`
  justify-content: center;
  padding: 32px 16px;
  position: absolute;
  width: 325px;
  height: 677px;
  overflow-y: scroll;
  background: #fff;
  right: 72px;
  top: 80px;
  z-index: 999;
  @media (max-width: 425px) {
    left: 0px;
    top: 80px;
  }
  @media (max-width: 320px) {
    width: 290px;
    left: 0px;
    top: 80px;
    padding: 0 5px;
  }
`;

export const CartTitle = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #1d1f22;
`;
export const CartItemNumber = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  color: #1d1f22;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: 32px;
`;
export const CardLeftSide = styled.div`
  width: 40%;
  height: 100%;
`;

export const ProductBrandName = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  align-items: center;
  color: #1d1f22;
`;

export const ProductName = styled.h5`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  align-items: center;
  color: #1d1f22;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const ProductPrice = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  color: #1d1f22;
`;

export const ProductSizeTitle = styled.h5`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  color: #1d1f22;
  margin-top: 10px;
`;
export const ProductSizeBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 10px;
  gap: 5px;
`;

export const ProductSizeBox = styled.div`
  width: 15%;
  height: 20px;
  border: 1px solid #1d1f22;
  text-align: center;
  background-color: ${(props) => (props.index === 1 ? "#000" : "#fff")};
`;

export const ProductSizeLable = styled.label`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${(props) => (props.index === 1 ? "#fff" : "#1d1f22")};
`;
export const ProductColorContainer = styled.div`
  width: 100%;
`;
export const ProductColorTitle = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;
  color: #1d1f22;
  margin-bottom: 10px;
`;

export const ProductColorBoxContainer = styled.div`
  display: flex;
  padding: 0px;
  gap: 8px;
  width: 116px;
  height: 36px;
`;
export const ProductColorBox = styled.div`
  width: 16px;
  height: 16px;
  border: ${(props) => (props.index === 0 ? "1px solid #5ECE7B" : "")};
  background: ${(props) => props.bgcolor};
`;

// RIGHT SIDE

export const CardRightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
`;

export const CartActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15%;
  height: 100%;
  margin-right: 10%;
`;

export const CartIncreamentButton = styled.button`
  display: block;
  width: 100%;
  height: 22.5px;
  text-align: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  background: #fff;
`;

export const CartQuantityBox = styled.input`
  width: 35px;
  height: 30px;
  @media (max-width: 425px) {
    width: 80%;
    height: 30px;
  }
`;
export const CartDecreamentButton = styled.button`
  display: block;
  width: 100%;
  height: 22.5px;
  text-align: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  background: #fff;
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
`;

export const TotalCostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const TotalLabels = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
`;

export const CheckoutActionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
export const CheckoutActionButton = styled.button`
  text-align: center;
  padding: 16px 32px;
  /* width: 50%; */
  height: 43px;
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  text-transform: uppercase;
  font-family: "Raleway";
  font-style: normal;
  font-size: 13px;
  cursor: pointer;
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

/*===PRODUCT SLIDES===*/

export const CartSlideButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 56px;
  height: 24px;
  top: 140px;
  left: 50px;
  @media (max-width: 425px) {
    top: 140px;
    left: 50px;
  }
`;

export const CartSlideNextButton = styled.button`
  width: 18px;
  height: 17.98px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: rgba(0, 0, 0, 0.73);
  color: #fff;
  border-style: none;
  outline: none;
`;

export const CartSlidePrevButton = styled.button`
  width: 18px;
  height: 17.98px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
