import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 0px 50px 0px 50px;
`;

export const CartTitle = styled.h2`
  width: 299px;
  height: 68px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  padding: 24px 0px;
  border-top: 2px solid #e5e5e5;
`;

export const CartCardLeftSide = styled.div`
  width: 400px;
  height: 100%;
`;
export const ProductBrandName = styled.h2`
  width: 292px;
  height: 27px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  align-items: center;
  color: #1d1f22;
`;

export const ProductName = styled.h2`
  width: 292px;
  height: 27px;
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
  width: 86px;
  height: 46px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  align-items: center;
  color: #1d1f22;
`;
export const ProductSizeTitle = styled.h4`
  width: 38px;
  height: 18px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;
export const ProductSizeBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const ProductSizeBox = styled.div`
  width: 25%;
  height: 45px;
  border: 1px solid #1d1f22;
  text-align: center;
  padding-top: 10px;
  background-color: ${(props) => (props.size === "s" ? "#000" : "#fff")};
  &:not(:last-child) {
    margin-right: 12px;
  }
`;
export const ProductSizeLable = styled.label`
  width: 18px;
  height: 18px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: ${(props) => (props.size === "s" ? "#fff" : "#1d1f22")};
`;
export const ProductColorContainer = styled.div`
  width: 100%;
`;
export const ProductColorTitle = styled.h4`
  width: 55px;
  height: 18px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  color: #1d1f22;
  margin-bottom: 10px;
`;

export const ProductColorBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 116px;
  height: 36px;
`;

export const ProductColorBox = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.bgcolor};
`;

export const CartCardRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
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
  height: 45px;
  text-align: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  background: #fff;
`;

export const CartQuantityBox = styled.label`
  display: block;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;
export const CartDecreamentButton = styled.button`
  display: block;
  width: 100%;
  height: 45px;
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

export const CartSlideButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 56px;
  height: 24px;
  top: 280px;
  left: 190px;
`;

export const CartSlideNextButton = styled.button`
  width: 18px;
  height: 17.98px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.73);
  color: #fff;
  border-style: none;
  outline: none;
`;

export const CartSlidePrevButton = styled.button`
  width: 18px;
  height: 17.98px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.73);
  color: #fff;
  border-style: none;
  outline: none;
`;

export const CardOrderCard = styled.div`
  width: 100%;
  height: 162px;
  padding: 32px 0px;
  border-top: 2px solid #e5e5e5;
  background-color: green;
`;
