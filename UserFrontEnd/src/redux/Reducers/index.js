import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
import ItemReducer from "./ItemReducer";
const AllReducers = combineReducers({
    CartReducer: CartReducer,
    CategoryReducer: CategoryReducer,
    ItemReducer: ItemReducer,
})

export default AllReducers