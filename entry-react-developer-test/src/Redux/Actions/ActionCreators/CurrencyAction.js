import * as type from "./../Types/ActionTypes.js";

export const ConvertCurrency = (currency) => (dispatch) => {
  console.log("in action", currency);

  dispatch({ type: type.CONVERT_CURRENCY_START });
  if (currency) {
    return dispatch({
      type: type.CONVERT_CURRENCY_SUCCESS,
      payload: currency,
    });
  } else {
    return dispatch({
      type: type.CONVERT_CURRENCY_ERROR,
      payload: "No Currency Selected",
    });
  }
};
