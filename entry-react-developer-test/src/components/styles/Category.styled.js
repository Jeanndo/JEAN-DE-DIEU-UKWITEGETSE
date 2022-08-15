import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 0px 50px 0px 50px;
`;

export const CategoryName = styled.h2`
  width: 299px;
  height: 68px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-bottom: 103px;
`;

export const ProductCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 413px;
  height: 444px;
  padding: 16px;
  opacity: ${(props) => (props.outOfStock ? 0.3 : 1)};
  &:not(:last-child) {
    margin-right: 40px;
  }
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 330px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 354px;
  height: 58px;
  padding: 16px;
`;

export const CardContentTitle = styled.span`
  display: block;
  width: 354px;
  height: 29px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

export const CardContentPrice = styled.span`
  width: 58px;
  height: 29px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  text-align: right;
  color: #1d1f22;
`;

export const CardCartIcon = styled.img`
  display: none;
  position: absolute;
  width: 60px;
  height: 60px;
  right: 30px;
  bottom: 66px;
  cursor: pointer;
`;

export const OutOfStockOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 180px;
`;

export const OutOfStockText = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000; ;
`;
