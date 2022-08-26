import * as types from "./../Actions/Types/ActionTypes.js";

const initialState = {
  currency: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONVERT_CURRENCY_START:
      return {
        ...state,
        currency: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.CONVERT_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.CONVERT_CURRENCY_ERROR:
      return {
        ...state,
        currency: {
          loading: false,
          message: null,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
