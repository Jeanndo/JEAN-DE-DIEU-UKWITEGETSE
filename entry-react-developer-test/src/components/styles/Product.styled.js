import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  padding: 5%;
  background: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 150px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const LeftSideContainer = styled.div`
  width: 929px;
  height: 511px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const LeftSideInnerContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 375px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 320px) {
    flex-direction: column-reverse;
  }
`;

export const LeftSideInnerProductGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 79px;
  height: 511px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 80px;
    overflow-y: scroll;
    overflow-x: scroll;
  }
  @media (max-width: 425px) {
    flex-direction: row;
    width: 100%;
    height: 50px !important;
    overflow-y: scroll;
    overflow-x: scroll;
  }
  @media (max-width: 375px) {
    flex-direction: row;
    width: 100%;
    height: 50px !important;
    overflow-y: scroll;
    overflow-x: scroll;
  }
  @media (max-width: 320px) {
    flex-direction: row;
    width: 100%;
    height: 50px !important;
    overflow-y: scroll;
    overflow-x: scroll;
  }
`;

export const LeftSideInnerProductGalleryImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 425px) {
    height: 50px;
  }
  @media (max-width: 375px) {
    height: 50px;
  }
  @media (max-width: 320px) {
    height: 50px;
  }
`;

export const LeftSideInnerMainProductContainer = styled.div`
  width: 100%;
  max-width: 810px;
  height: 511px;
  background: ${(props) => props.bgcolor};
  @media (max-width: 425px) {
    height: 300px;
  }
  @media (max-width: 375px) {
    height: 300px;
  }
  @media (max-width: 320px) {
    height: 300px;
  }
`;

export const LeftSideInnerMainProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const RightSideContainer = styled.div`
  width: 292px;
  height: 511px;
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

export const RightSideProductAttributeName = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
  text-transform: uppercase;
`;

export const ProductAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    props.selected ? "3px solid #5ECE7B" : "2px solid black"};
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

export const RightSideProductAttributeTwoBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 116px;
  height: 36px;
`;

export const RightSideProductSecondAttributeBox = styled.div`
  width: 32px;
  height: 32px;
  border: ${(props) => (props.index ? "1px solid #5ece7b" : "")};
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
