import * as type from "./../Types/ActionTypes.js";

export const addToCart = (productId, product) => async (dispatch) => {
  return dispatch({
    type: type.ADD_TO_CART,
    payload: {
      id: productId,
      product: product,
    },
  });
};

export const removeFromCart = (productId) => async (dispatch) => {
  return dispatch({
    type: type.REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  });
};

export const adjustQuantity = (productId, value) => async (dispatch) => {
  return dispatch({
    type: type.ADJUST_QUANTITY,
    payload: {
      id: productId,
      qty: value,
    },
  });
};

export const getAttributeValue = (productId, attribute) => async (dispatch) => {
  console.table("attributes", productId, attribute);
  return dispatch({
    type: type.GET_ATTRIBUTE_VALUE,
    payload: {
      id: productId,
      attributeId: attribute,
    },
  });
};

export const loadCurrentProduct = (product) => async (dispatch) => {
  return dispatch({
    type: type.LOAD_CURRENT_ITEM,
    payload: product,
  });
};
