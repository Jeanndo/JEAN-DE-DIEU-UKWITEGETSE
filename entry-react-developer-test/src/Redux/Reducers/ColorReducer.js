import * as type from "./../Actions/Types/ActionTypes.js";

const initialState = {
  color: {
    loading: false,
    message: {
      color: null,
      index: 0,
    },
    success: false,
    error: null,
  },
};

export const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COLOR_START:
      return {
        ...state,
        color: {
          loading: true,
          message: {
            color: null,
            index: 0,
          },
          success: false,
          error: null,
        },
      };
    case type.GET_COLOR_SUCCESS:
      return {
        ...state,
        color: {
          loading: false,
          message: {
            color: action.payload.color,
            index: action.payload.index,
          },
          success: true,
          error: null,
        },
      };
    case type.GET_COLOR_FAILURE:
      return {
        ...state,
        color: {
          loading: false,
          message: {
            color: null,
            index: 0,
          },
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
