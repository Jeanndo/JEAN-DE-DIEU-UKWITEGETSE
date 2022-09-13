import React, { Component, Fragment } from "react";
import {
  RightSideProductAttributeBoxContainer,
  ProductAttributeBox,
  ProductAttributeValue,
} from "./../../styles/Product.styled.js";

import { getAttributeValue } from "./../../../Redux/Actions/ActionCreators/shoppingAction.js";
import { connect } from "react-redux";

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
              <ProductAttributeValue
                onClick={() =>
                  this.props.getAttributeValue(item.id, this.props.productId)
                }
              >
                {this.props.type === "swatch" ? "" : item.value}
              </ProductAttributeValue>
            </ProductAttributeBox>
          ))}
        </RightSideProductAttributeBoxContainer>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAttributeValue: (id, attributeId) =>
      dispatch(getAttributeValue(id, attributeId)),
  };
};

export default connect(null, mapDispatchToProps)(Attributes);
