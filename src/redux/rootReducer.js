import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import reducer from "./icecream/icecreamReducer";
import icecreamContainer from "../components/icecreamContainer";
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:reducer
})
export default rootReducer