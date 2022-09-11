import * as type from "./../Types/ActionTypes.js";

export const ConvertCurrency = (currency, index) => (dispatch) => {
  dispatch({ type: type.CONVERT_CURRENCY_START });
  if (currency) {
    return dispatch({
      type: type.CONVERT_CURRENCY_SUCCESS,
      payload: {
        symbol: currency,
        index: index,
      },
    });
  } else {
    return dispatch({
      type: type.CONVERT_CURRENCY_ERROR,
      payload: "No Currency Selected",
    });
  }
};
