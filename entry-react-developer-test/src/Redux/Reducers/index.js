import { combineReducers } from "redux";
import { CategoryNameReducer } from "./CategoryReducer.js";
import { CurrencyReducer } from "./CurrencyReducer.js";
import { shopping } from "./shoppingReducer.js";
import { attributeReducer } from "./AttributeReducer.js";

export default combineReducers({
  CurrencyReducer,
  shopping,
  CategoryNameReducer,
  attributeReducer,
});
