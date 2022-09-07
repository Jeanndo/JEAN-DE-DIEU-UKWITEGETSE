import styled from "styled-components";

export const CategoryContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
  padding: 0px 50px 50px 50px;
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
  padding-left: 10px;
  @media (min-width: 425px) {
    padding-left: 40px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
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
  width: 413px;
  height: 444px;
  opacity: ${(props) => (props.inStock ? 1 : 0.5)};
  cursor: ${(props) => (props.inStock ? "pointer" : "not-allowed")};
  &:not(:last-child) {
    margin-right: 20px;
    margin-bottom: 50px;
  }
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
export const ProductPagination = styled.div`
  margin-top: 50px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PaginationActionButton = styled.button`
  position: absolute;
  border: none;
  background: #000;
  color: #fff;
  width: 50px;
  padding: 5px;
  top: 40%;
  left: ${(props) => (props.prevBtn ? "20px" : "")};
  right: ${(props) => (props.nextBtn ? "20px" : "")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const ArrowButton = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
