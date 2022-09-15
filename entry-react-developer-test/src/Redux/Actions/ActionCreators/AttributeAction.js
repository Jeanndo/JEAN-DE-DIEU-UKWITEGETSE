import * as type from "./../Types/ActionTypes.js";

export const getAttributeValue = (productId, attribute) => async (dispatch) => {
  return dispatch({
    type: type.GET_ATTRIBUTE_VALUE,
    payload: {
      productId: productId,
      attribute: attribute,
    },
  });
};
