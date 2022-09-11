import styled from "styled-components";

export const SwitcherContainer = styled.div`
  position: relative;
`;
export const DropdownMenuButton = styled.div`
  margin-top: 20px;
  background: transparent;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 160%;
`;

export const ArrowImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
export const DropdownCurrencyContainer = styled.div`
  width: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  right: -120px;
  top: 80px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

export const DropdownCurrencyItem = styled.div`
  width: 100%;
  padding: 10px 5px;
  height: 45px;
  text-align: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 160%;
  &:hover {
    background: #eeeeee;
  }
  background: ${(props) => (props.selected ? "#EEEEEE" : "#FFFF")};
  cursor: pointer;
`;
