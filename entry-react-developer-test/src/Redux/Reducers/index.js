import { combineReducers } from "redux";
import { CategoryNameReducer } from "./CategoryReducer.js";
import { CurrencyReducer } from "./CurrencyReducer.js";
import { shopping } from "./shoppingReducer.js";

export default combineReducers({
  CurrencyReducer,
  shopping,
  CategoryNameReducer,
});
