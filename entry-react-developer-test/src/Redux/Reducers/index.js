import { combineReducers } from "redux";

import { CurrencyReducer } from "./CurrencyReducer.js";
import { shopping } from "./shoppingReducer.js";

export default combineReducers({ CurrencyReducer, shopping });
