import React, { Component, Fragment } from "react";
import {
  RightSideProductAttributeBoxContainer,
  ProductAttributeBox,
  ProductAttributeValue,
} from "./../../styles/Product.styled.js";

class Attributes extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <RightSideProductAttributeBoxContainer>
          {this.props.items.map((item) => (
            <ProductAttributeBox
              key={item.id}
              color={this.props.type === "swatch" ? item.value : ""}
            >
              <ProductAttributeValue>
                {this.props.type === "swatch" ? "" : item.value}
              </ProductAttributeValue>
            </ProductAttributeBox>
          ))}
        </RightSideProductAttributeBoxContainer>
      </Fragment>
    );
  }
}

export default Attributes;
