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
  &:not(:last-child) {
    margin-right: 40px;
  }
  &:hover {
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
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
  position: absolute;
  width: 60px;
  height: 60px;
  right: 30px;
  bottom: 66px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  cursor: pointer;
`;
