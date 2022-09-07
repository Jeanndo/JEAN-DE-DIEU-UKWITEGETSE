import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
  padding: 0px 50px 0px 50px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    gap: 50px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0px;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  flex: 50%;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 320px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export const LeftSideProductGallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  height: 300px;
  overflow-y: scroll;
  @media (max-width: 425px) {
    flex-direction: row;
    padding-left: 50px;
    height: 80px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: scroll;
  }
`;
export const LeftSideGalleryImage = styled.img`
  width: 79px;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  @media (max-width: 425px) {
    margin-right: 40px;
  }
`;

export const LeftSideMainProductContainer = styled.div`
  width: 600px;
  height: 500px;
  background: ${(props) => props.bgcolor};
  @media (max-width: 425px) {
    width: 100%;
    margin-right: 40px;
    height: 250px;
  }
`;

export const LeftSideMainProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media (max-width: 425px) {
    width: 100%;
    height: 250px;
  }
`;

export const ProductRightSideDetails = styled.div`
  width: 300px;
  height: 595px;
  margin-left: 50px;
`;
export const RightSideProductBrandName = styled.h2`
  width: 292px;
  height: 27px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;
  align-items: center;
  color: #1d1f22;
`;

export const RightSideProductName = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 27px;
  align-items: center;
  color: #1d1f22;
  margin-top: 16px;
  margin-bottom: 43px;
`;

export const RightSideProductSizeContainer = styled.div`
  width: 100%;
  height: 53px;
`;

export const RightSideProductSizeTitle = styled.h4`
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

export const RightSideProductSizeBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const ProductSizeBox = styled.div`
  width: 46px;
  height: 35px;
  border: 1px solid #1d1f22;
  text-align: center;
  padding-top: 8px;
  background-color: ${(props) => (props.index === 1 ? "#000" : "#fff")};
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
  color: ${(props) => (props.index === 1 ? "#fff" : "#1d1f22")};
`;

export const RightSideProductColorContainer = styled.div`
  width: 100%;
`;
export const RightSideProductColorTitle = styled.h4`
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

export const RightSideProductColorBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 116px;
  height: 36px;
`;

export const RightSideProductColorBox = styled.div`
  width: 32px;
  height: 32px;
  border: ${(props) => (props.index === 0 ? "1px solid #5ece7b" : "")};
  background: ${(props) => props.bgcolor};
  cursor: pointer;
`;
export const RightSideProductPriceContainer = styled.div`
  width: 100%;
  margin-top: 38px;
`;

export const RightSideProductPriceLabel = styled.h4`
  width: 50px;
  height: 18px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  color: #1d1f22;
  margin-bottom: 30px;
`;
export const RightSideProductPriceFigures = styled.h4`
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

export const AddToCartButton = styled.button`
  border-style: none;
  align-items: center;
  padding: 16px 32px;
  width: 297px;
  height: 52px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
  background: #5ece7b;
  margin-bottom: 40px;
  @media (min-width: 320px) {
    width: 250px;
  }
`;

export const ProductDescriptionText = styled.p`
  text-align: left;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1d1f22;
`;
