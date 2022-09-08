import * as type from "./../Types/ActionTypes.js";

export const getColor = (color, index, prodId) => async (dispatch) => {
  console.table("colorAction", color, index, prodId);

  dispatch({ type: type.GET_COLOR_START });

  if (color && index) {
    return dispatch({
      type: type.GET_COLOR_SUCCESS,
      payload: {
        color: color,
        index: index,
        prodId: prodId,
      },
    });
  } else {
    return dispatch({
      type: type.GET_COLOR_FAILURE,
      payload: "no color selected",
    });
  }
};
