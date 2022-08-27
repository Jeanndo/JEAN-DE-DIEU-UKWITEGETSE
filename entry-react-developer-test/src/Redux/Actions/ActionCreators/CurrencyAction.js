import * as type from "./../Types/ActionTypes.js";

export const ConvertCurrency = (currency) => (dispatch) => {
  console.log("hello world");
  return dispatch({
    type: type.CONVERT_CURRENCY_SUCCESS,
    payload: currency,
  });
};
