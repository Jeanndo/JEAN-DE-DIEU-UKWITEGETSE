import React, { Component, Fragment } from "react";
import {
  RightSideProductAttributeBoxContainer,
  ProductAttributeBox,
  ProductAttributeValue,
} from "./../../styles/Product.styled.js";

import { getAttributeValue } from "./../../../Redux/Actions/ActionCreators/AttributeAction.js";
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
              selected={this.props.attributes.find((attribute) =>
                attribute.attribute === item.value &&
                attribute.productId === this.props.productId
                  ? true
                  : false
              )}
              onClick={() =>
                this.props.getAttributeValue(this.props.productId, item.value)
              }
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

const mapDispatchToProps = (dispatch) => {
  return {
    getAttributeValue: (id, attribute) =>
      dispatch(getAttributeValue(id, attribute)),
  };
};

const mapStateToProps = (state) => {
  return {
    attributes: state.attributeReducer.attributes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
