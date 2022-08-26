import * as types from "./../Types/ActionTypes.js";

export const ConvertCurrency = (currency) => (dispatch) => {
  dispatch({ type: types.CONVERT_CURRENCY_START });

  console.log("currency", currency);

  if (currency) {
    return dispatch({
      type: types.CONVERT_CURRENCY_SUCCESS,
      payload: currency,
    });
  } else {
    return dispatch({
      type: types.CONVERT_CURRENCY_ERROR,
      payload: "No currency Selected!!",
    });
  }
};
