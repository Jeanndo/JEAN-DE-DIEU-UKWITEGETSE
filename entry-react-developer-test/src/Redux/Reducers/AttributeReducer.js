import * as type from "./../Actions/Types/ActionTypes.js";

const initialState = {
  attributes: [],
};

export const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ATTRIBUTE_VALUE_SUCCESS:
      const isInAttribute = state.attributes.find((attribute) =>
        attribute === action.payload.attribute ? true : false
      );

      return {
        ...state,
        attributes: isInAttribute
          ? state.attributes.filter(
              (attribute) => attribute !== action.payload.attribute
            )
          : [
              ...state.attributes,

              {
                attribute: action.payload.attribute,
                productId: action.payload.productId,
              },
            ],
      };

    default:
      return state;
  }
};
