import styled from "styled-components";

export const CategoryContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 80px 5% 0 5%;
  @media (max-width: 425px) {
    padding: 0px;
    margin-top: 30px;
  }
`;

export const CategoryName = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  text-transform: capitalize;
  color: #1d1f22;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const CardCartIcon = styled.img`
  visibility: hidden;
  position: absolute;
  width: 60px;
  height: 60px;
  right: 30px;
  object-fit: contain;
  bottom: 66px;
  cursor: pointer;
`;
export const ProductCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0;
  background: #fff;
  width: 386px;
  height: 444px;
  opacity: ${(props) => (props.inStock ? 1 : 0.5)};
  cursor: ${(props) => (props.inStock ? "pointer" : "default")};

  &:hover {
    box-shadow: ${(props) =>
        props.inStock ? "rgba(100, 100, 111, 0.2) 0px 7px" : "none"}
      29px 0px;
  }
  &:hover ${CardCartIcon} {
    visibility: visible;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 444px;
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 444px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 330px;
  object-fit: contain;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 354px;
  height: 58px;
  padding: 16px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContentTitle = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  color: #1d1f22;
`;

export const CardContentPrice = styled.span`
  display: block;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #1d1f22;
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

export const ArrowButton = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
