import * as type from "./../Actions/Types/ActionTypes.js";

const initialState = {
  categoryName: {
    loading: false,
    message: {
      index: 0,
      category: "all",
    },
    success: false,
    error: null,
  },
};

export const CategoryNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CATEGORY_NAME_START:
      return {
        ...state,
        categoryName: {
          loading: true,
          message: {
            index: 0,
            category: null,
          },
          success: false,
          error: null,
        },
      };
    case type.GET_CATEGORY_NAME_SUCCESS:
      return {
        ...state,
        categoryName: {
          loading: false,
          message: {
            index: action.payload.index,
            category: action.payload.category,
          },
          success: true,
          error: null,
        },
      };
    case type.GET_CATEGORY_NAME_FAILURE:
      return {
        ...state,
        categoryName: {
          loading: false,
          message: {
            index: 0,
            category: null,
          },
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
