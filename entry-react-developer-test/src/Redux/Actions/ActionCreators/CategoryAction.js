import * as type from "./../Types/ActionTypes.js";

export const getCategoryName = (categoryName, index) => async (dispatch) => {
  console.log("in action", categoryName);

  dispatch({ type: type.GET_CATEGORY_NAME_START });
  if (categoryName) {
    return dispatch({
      type: type.GET_CATEGORY_NAME_SUCCESS,
      payload: {
        index: index,
        category: categoryName,
      },
    });
  } else {
    return dispatch({
      type: type.GET_CATEGORY_NAME_FAILURE,
      payload: "No Category Selected",
    });
  }
};
