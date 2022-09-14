import * as type from "./../Types/ActionTypes.js";

export const getAttributeValue = (productId, attribute) => async (dispatch) => {
  return dispatch({
    type: type.GET_ATTRIBUTE_VALUE_SUCCESS,
    payload: {
      productId: productId,
      attribute: attribute,
    },
  });
};
