import React, { Component, Fragment } from "react";
import {
  RightSideProductAttributeBoxContainer,
  ProductAttributeBox,
  ProductAttributeValue,
} from "./../../styles/Cart.styled.js";
import { connect } from "react-redux";

class Attributes extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log("cart attributes", this.props.attributes);

    return (
      <Fragment>
        <RightSideProductAttributeBoxContainer>
          {this.props.items.map((item) => (
            <ProductAttributeBox
              key={item.id}
              color={this.props.type === "swatch" ? item.value : ""}
              selected={this.props.attributes.find((attribute) =>
                attribute.attribute === item.value &&
                attribute.productId === this.props.productId
                  ? true
                  : false
              )}
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

const mapStateToProps = (state) => {
  return {
    attributes: state.attributeReducer.attributes,
  };
};

export default connect(mapStateToProps)(Attributes);
