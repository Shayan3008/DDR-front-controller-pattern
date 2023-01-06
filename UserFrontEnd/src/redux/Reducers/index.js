import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
const AllReducers = combineReducers({
    CartReducer: CartReducer,
    CategoryReducer: CategoryReducer
})

export default AllReducers